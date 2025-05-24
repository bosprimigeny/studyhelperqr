/**
 * @file qr_script.js
 * @description STUDYQR 学习通样式表 & 操作逻辑
 * @author bosprimigeny
 * @copyright © bosprimigeny 2025
 * @license MIT 
 * @date 2025-05-21
 */

const fileInput = document.querySelector('input[type="file"]');
const form = document.querySelector('.upload-form');
const rightPanel = document.querySelector('.right-panel');

let uploadClickCount = 0;
let qrGenerateCount = 0;

function updateStatsDisplay() {
    const statsDiv = document.querySelector('#stats');
    statsDiv.innerHTML = `
        📁 上传文件次数：${uploadClickCount}<br>
        🧾 生成二维码次数：${qrGenerateCount}
    `;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    uploadClickCount++;
    updateStatsDisplay();

    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function (event) {
        const imageDataUrl = event.target.result;

        const image = new Image();
        image.src = imageDataUrl;

        image.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, canvas.width, canvas.height);

            if (code) {
                const originalText = code.data;
                const newText = modifyCreateTime(originalText);
                generateQRCode(newText);
            } else {
                alert('二维码识别失败，请使用清晰图像');
            }
        };
    };
    reader.readAsDataURL(file);
});

/**
 * 只修改 createTime 参数时间字符串中 T 后的小时数，加1小时
 * 不整体转Date，避免格式变动，只针对小时部分数字操作，保留其他部分不变
 * @param {string} text 原二维码文本内容
 * @returns {string} 修改后的文本
 */
function modifyCreateTime(text) {
    const regex = /createTime=([0-9]{4}-[0-9]{2}-[0-9]{2})([ T])([0-9]{2})(:[0-9]{2}:[0-9]{2})/;
    const match = text.match(regex);

    if (match) {
        const datePart = match[1];
        const sep = match[2];
        let hourStr = match[3];
        const rest = match[4];

        let hourNum = parseInt(hourStr, 10);
        hourNum = (hourNum + 1) % 24;
        hourStr = hourNum.toString().padStart(2, '0');

        const newTime = `${datePart}${sep}${hourStr}${rest}`;
        const newText = text.replace(regex, `createTime=${newTime}`);

        displayDeadline(newTime.replace('T', ' '));

        return newText;
    }

    alert('未检测到 createTime 参数');
    return text;
}

/**
 * 生成新的二维码并显示在页面右侧面板顶部
 * 如果已有二维码，先删除旧的，保持显示位置固定
 * @param {string} data 二维码内容文本
 */
function generateQRCode(data) {
    qrGenerateCount++;
    updateStatsDisplay();

    const oldQr = rightPanel.querySelector('.qr-result');
    if (oldQr) {
        oldQr.remove();
    }

    const qrContainer = document.createElement('div');
    qrContainer.innerHTML = '<h3>静态二维码（支持一码多人）：</h3>';

    const canvas = document.createElement('canvas');
    QRCode.toCanvas(canvas, data, { width: 300 }, function (error) {
        if (error) console.error(error);
    });

    qrContainer.appendChild(canvas);
    qrContainer.className = 'qr-result';

    rightPanel.insertBefore(qrContainer, rightPanel.firstChild);
}

/**
 * 在页面右侧面板显示任务截止时间（格式 YYYY-MM-DD HH:mm:ss）
 * 每次调用会先删除旧的显示
 * @param {string} isoTime ISO格式时间字符串
 */
function displayDeadline(isoTime) {
    const existingDeadline = rightPanel.querySelector('.deadline');
    if (existingDeadline) {
        existingDeadline.remove();
    }

    const deadline = document.createElement('p');
    deadline.className = 'deadline';
    deadline.textContent = `任务截止时间：${isoTime}`;

    rightPanel.insertBefore(deadline, rightPanel.children[1]);
}

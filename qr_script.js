<!--
  @file index.html
  @description STUDYQR 学习通样式表
  @author bosprimigeny
  @copyright © bosprimigeny 2025
  @license MIT
  @date 2025-05-21
-->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8" />
    <title>STUDYQR学习通</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js"></script>
    <script defer src="qr_script.js"></script>
</head>
<body>
    <div class="container">
        <div class="left-panel">
            <div class="logo-box">
                <img src="logo.jpg" alt="Logo" class="logo" />
            </div>
        </div>
        <div class="right-panel" id="result-panel">
            <!-- 🔢 添加统计区域 -->
            <div id="stats" style="padding: 10px; font-weight: bold;"></div>

            <div class="reminder-text">
                <h3>关于课堂签到与学习辅助的温馨提醒</h3>
                <p>为帮助大家更好地完成学习任务、确保课堂签到无误，请各位同学配合以下事项：</p>
                <ul>
                    <li>照片提交：只需提交动态二维码的随意一张照片。</li>
                    <li>时间规划：新生成的任务截止时间将严格控制在小时内，请留意进度；并且，老师关闭签到后无法再签到。</li>
                    <li>签到保障：请放心，我们会保证你的信息不被泄露，确保每位同学顺利完成签到，安心专注于课堂学习。</li>
                </ul>
                <p>目标：通过有序协作，助力大家高效学习，杜绝因流程问题影响课堂参与。如有疑问，请随时沟通～</p>
                <p>图片 logo 来源于 xhs，侵权联系删除～更好的建议欢迎联系。</p>
                <p>本项目开发时间短，有任何建议和意见欢迎联系开发者 <span id="email"></span></p>
            </div>
        </div>
    </div>

    <h2>上传含有二维码图片（png/jpg/jpeg），我们将自动识别内容并输出静态二维码，有效时间为一小时</h2>

    <form class="upload-form">
        <input type="file" accept=".png,.jpg,.jpeg" required />
        <button type="submit">上传识别并输出静态二维码</button>
    </form>

    <footer>
        <p class="copyright">© bosprimigenious</p>
    </footer>

    <script>
        const user = "sgqa5692";
        const domain = "outlook.com";
        document.getElementById("email").innerText = user + "@" + domain;
    </script>
</body>
</html>

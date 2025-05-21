# 🧪 StudyQR - 二维码签到辅助工具

> 一个纯前端实现的二维码识别与时间参数调整工具，适用于课堂签到、学习任务提醒等场景。  
> 本地运行，零后端，隐私安全。

---

## 🚀 项目简介

StudyQR 是一个支持二维码图片上传识别、内容解析并自动修改 `createTime` 时间字段（+1小时）后重新生成新二维码的网页工具。适用于：

- 动态二维码签到系统的辅助签到（如课堂学习）
- 快速调整二维码任务时间参数
- 前端图像处理与二维码开发的教学或参考案例

---

## 🎯 功能亮点

- ✅ 本地二维码图片识别（依赖 [jsQR](https://github.com/cozmo/jsQR)）
- ✅ 自动解析并修改 `createTime` 参数（仅加1小时）
- ✅ 实时生成新的二维码（依赖 [QRCode.js](https://github.com/davidshimjs/qrcodejs)）
- ✅ 截止时间直观展示
- ✅ 零后端、安全隐私、无需服务器部署

---

## 📦 使用方式

### 本地打开（推荐）

1. 克隆或下载项目：

    ```bash
    git clone https://github.com/bosprimigenious/StudyQr.git
    ```

2. 进入项目目录，直接双击打开 `index.html` 即可使用，无需额外服务器或网络环境。

### 在线访问（GitHub Pages）

已启用 GitHub Pages 的话，可以访问：

👉 [https://bosprimigenious.github.io/StudyQR/](https://bosprimigenious.github.io/StudyQR/)

---

## 📝 使用须知（课堂签到 & 学习辅助）

- 📸 **照片提交**：上传任意一张动态二维码的清晰截图，无需现场扫码。
- ⏰ **时间规划**：生成的新二维码会在原 `createTime` 基础上自动加1小时，请合理安排签到时间；签到关闭后无法补签。
- 🔐 **信息安全**：全部运行在本地浏览器，无数据上传，保护隐私安全。
- 🎯 **开发目的**：提升课堂签到效率，避免技术问题影响正常学习。

> 📷 LOGO 图片来源于小红书，如有侵权请联系删除。  
> 💬 若有建议或问题，欢迎联系开发者：[bosprimigenious@foxmail.com](mailto:bosprimigenious@foxmail.com)

---

## 🧰 技术栈

- HTML5 + CSS3
- JavaScript (Vanilla)
- [jsQR](https://github.com/cozmo/jsQR) - 二维码识别
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - 二维码生成

---

## 📂 项目结构

```
StudyQr/
├── index.html # 主页面
├── style.css # 页面样式
├── script.js # 主逻辑脚本
└── logo.png
```
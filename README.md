# 广东高考英语听说练习软件

内置高考听说，模仿高考听说考试进行练习，搜索资源，本地部署。

## 功能

- **Part A 模仿朗读**（20分）：阅读文本 → 聆听示范 → 朗读录音 → 自动评分
- **Part B 角色扮演**（16分）：情景对话 → 三问五答 → 自动评分
- **Part C 故事复述**（24分）：关键词提示 → 听两遍故事 → 复述录音 → 自动评分
- **模拟考试**：完整模拟高考听说考试流程，三部分依次进行
- **资源搜索**：内置资源 + 在线搜索听说素材
- **检查更新**：多源回退（GitHub Pages → jsdelivr → Gitee → GitHub API）
- **反馈功能**：QQ 联系方式
- **数据管理**：备份/恢复/清除练习数据
- **PWA 支持**：可安装到桌面/主屏幕

## 使用方法

### 在线使用

访问 https://xdbzys.github.io/gaokao-listening-speaking/

### 本地部署

```bash
# 克隆仓库
git clone https://github.com/xdbzys/gaokao-listening-speaking.git
cd gaokao-listening-speaking

# 启动本地服务器
python3 -m http.server 8080

# 浏览器访问
open http://localhost:8080
```

## 技术说明

- 纯前端 HTML/CSS/JavaScript，无需后端
- 使用 Web Speech API 进行语音合成和识别
- 推荐使用 Chrome 浏览器以获得最佳语音识别效果
- 所有数据保存在浏览器 localStorage 中

## 考试格式

广东高考英语听说考试总分为 60 分（÷3 = 20 分计入高考总分）：

| 部分 | 题型 | 分值 |
|------|------|------|
| Part A | 模仿朗读 | 20分 |
| Part B | 角色扮演 | 16分 |
| Part C | 故事复述 | 24分 |

## 许可

仅供学习练习使用。

# 火烧云分析网页应用

这是一个火烧云分析网页应用，用于展示从 [sunsetbot.top](https://sunsetbot.top/) 获取的火烧云数据。该应用包含前端展示和Node.js后端服务。

## 🚀 在线演示

**立即体验应用：**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/sunsetbot)

> 点击上方按钮可以一键部署到 Netlify

## 功能特点

- 实时获取火烧云分析数据
- 展示北京时间、鲜艳度、气溶胶和不确定性等参数
- 支持城市搜索功能，可查询不同城市的火烧云数据
- 支持手动刷新数据
- 数据历史记录保存和查看
- 响应式设计，适配各种设备
- Node.js后端解决跨域问题

## 技术栈

### 前端
- HTML5
- CSS3
- JavaScript (ES6+)
- localStorage (用于保存历史记录)

### 后端
- Node.js
- Express
- Axios
- Cheerio

## 📦 部署方式

### 方法1: 一键部署到 Netlify (推荐)

1. 点击上方的 "Deploy to Netlify" 按钮
2. 连接你的 GitHub 账户
3. 选择仓库名称
4. 点击 "Save & Deploy"
5. 等待部署完成，获得在线访问链接

### 方法2: 手动部署到 Netlify

1. **构建项目**
   ```bash
   npm install
   npm run build
   ```

2. **部署到 Netlify**
   - 登录 [Netlify](https://netlify.com)
   - 拖拽 `dist` 文件夹到部署区域
   - 或连接 Git 仓库自动部署

### 方法3: 本地开发

#### 前提条件
- 安装 [Node.js](https://nodejs.org/) (推荐v18.0.0或更高版本)

#### 安装步骤

1. 克隆或下载本项目到本地
2. 进入项目目录并安装依赖：
   ```bash
   npm install
   ```
3. 启动开发服务器：
   ```bash
   npm run dev
   ```
4. 或者启动生产服务器：
   ```bash
   npm start
   ```
5. 在浏览器中访问 `http://localhost:4000`

## API接口

### 获取火烧云数据
- **URL**: `/api/sunset-data`
- **方法**: GET
- **参数**: 
  - `city` (可选): 城市名称，默认为"深圳"
- **响应格式**: JSON
- **响应示例**:
  ```json
  {
    "beijingTime": "2023-06-15 05:40:20",
    "vividness": "0.059 (小烧)",
    "aerosol": "0.28 (还不错)",
    "uncertainty": "太复杂了不会算",
    "city": "深圳"
  }
  ```

### 获取支持的城市列表
- **URL**: `/api/cities`
- **方法**: GET
- **响应格式**: JSON
- **响应示例**:
  ```json
  {
    "cities": ["深圳", "北京", "上海", "广州", "杭州", "成都", "重庆", "武汉", "西安", "南京"]
  }
  ```

## 📁 项目结构

```
sunsetbot/
├── index.html              # 前端页面
├── background.html         # 背景页面
├── styles.css              # 样式文件
├── script.js               # 前端脚本
├── server.js               # 本地开发服务器
├── build.js                # 构建脚本
├── netlify.toml            # Netlify 配置文件
├── netlify/functions/      # Serverless 函数
│   ├── sunset-data.js      # 火烧云数据 API
│   └── cities.js           # 城市列表 API
├── dist/                   # 构建输出目录
├── package.json            # 项目配置
├── DEPLOY.md               # 部署说明
├── README-netlify.md       # Netlify 详细文档
└── README.md               # 项目说明
```

## ⚙️ Netlify 配置

### 构建设置
- **构建命令**: `npm run build`
- **发布目录**: `dist`
- **函数目录**: `netlify/functions`
- **Node.js 版本**: 18

### 部署分支
- **推荐分支**: `main` 或 `master`

详细的 Netlify 部署配置请参考 [README-netlify.md](README-netlify.md) 和 [DEPLOY.md](DEPLOY.md)。

## 注意事项

- 本项目依赖于 [sunsetbot.top](https://sunsetbot.top/) 提供的数据
- 后端服务使用Cheerio解析HTML数据，如果目标网站结构发生变化，可能需要更新解析逻辑
- 城市搜索功能依赖于sunsetbot.top的API支持，如果该API不支持城市参数，则可能需要调整实现方式

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 🆘 问题反馈

如果您遇到任何问题或有改进建议，请提交 [Issue](https://github.com/yourusername/sunsetbot/issues)。

## 🙏 致谢

- 感谢 [sunsetbot.top](https://sunsetbot.top) 提供火烧云数据
- 感谢 Netlify 提供免费的部署服务

## 📄 许可证

MIT

---

**⭐ 如果这个项目对您有帮助，请给它一个星标！**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/sunsetbot.svg?style=social&label=Star)](https://github.com/yourusername/sunsetbot)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/sunsetbot.svg?style=social&label=Fork)](https://github.com/yourusername/sunsetbot/fork)
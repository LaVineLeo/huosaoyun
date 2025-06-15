# 火烧云分析 - Netlify 部署指南

本项目已配置为支持 Netlify 部署，包含前端静态文件和后端 Serverless Functions。

## 项目结构

```
├── dist/                    # 构建输出目录（自动生成）
├── netlify/
│   └── functions/          # Netlify Functions
│       ├── sunset-data.js  # 火烧云数据API
│       └── cities.js       # 城市列表API
├── netlify.toml            # Netlify 配置文件
├── build.js                # 构建脚本
├── package.json            # 项目依赖
└── 其他前端文件...
```

## 部署步骤

### 1. 准备代码

确保所有文件都已提交到 Git 仓库：

```bash
git add .
git commit -m "Add Netlify configuration"
git push origin main
```

### 2. 在 Netlify 上部署

#### 方法一：通过 Git 连接（推荐）

1. 登录 [Netlify](https://netlify.com)
2. 点击 "New site from Git"
3. 选择你的 Git 提供商（GitHub/GitLab/Bitbucket）
4. 选择这个项目的仓库
5. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions`
6. 点击 "Deploy site"

#### 方法二：手动部署

1. 本地构建项目：
   ```bash
   npm install
   npm run build
   ```

2. 将 `dist` 目录和 `netlify` 目录一起上传到 Netlify

### 3. 环境配置

Netlify 会自动识别 `netlify.toml` 配置文件，无需额外配置。

## 配置说明

### netlify.toml

- **构建配置**: 指定构建命令和发布目录
- **重定向规则**: 
  - API 请求重定向到 Netlify Functions
  - SPA 路由支持
- **Functions 配置**: 指定 Serverless Functions 目录

### 构建脚本 (build.js)

- 复制静态文件到 `dist` 目录
- 修改 JavaScript 中的 API 地址为 Netlify Functions 路径
- 确保所有资源正确打包

### Netlify Functions

- **sunset-data.js**: 处理火烧云数据请求
- **cities.js**: 提供城市列表数据
- 自动处理 CORS 和错误处理

## 本地开发

### 传统开发模式

```bash
npm install
npm run dev
```

### Netlify 本地开发

安装 Netlify CLI：

```bash
npm install -g netlify-cli
```

本地运行 Netlify 环境：

```bash
npm run build
netlify dev
```

这将启动本地开发服务器，模拟 Netlify 的生产环境。

## 功能特性

✅ **静态文件托管**: HTML、CSS、JS、图片等
✅ **Serverless Functions**: 后端 API 逻辑
✅ **自动构建**: Git 推送触发自动部署
✅ **CORS 支持**: 跨域请求处理
✅ **SPA 路由**: 单页应用路由支持
✅ **环境变量**: 支持生产/开发环境配置

## 注意事项

1. **依赖管理**: 确保 `package.json` 中的依赖版本正确
2. **函数冷启动**: Netlify Functions 可能有冷启动延迟
3. **请求限制**: 免费版有请求次数限制
4. **文件大小**: 单个函数文件不能超过 50MB

## 故障排除

### 构建失败

1. 检查 `package.json` 中的依赖
2. 查看 Netlify 构建日志
3. 确保 Node.js 版本兼容（推荐 18.x）

### API 请求失败

1. 检查 Functions 日志
2. 确认 API 路径正确
3. 验证 CORS 配置

### 页面无法访问

1. 检查重定向规则
2. 确认静态文件路径
3. 查看浏览器控制台错误

## 性能优化

- 启用 Netlify 的 CDN 加速
- 配置缓存策略
- 压缩静态资源
- 使用 Netlify Analytics 监控性能

## 更新部署

每次推送代码到主分支，Netlify 会自动重新构建和部署。也可以在 Netlify 控制台手动触发部署。
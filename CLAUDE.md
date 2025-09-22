# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 项目概述

BroadcastChannel 是一个基于 Astro 的应用程序，可将 Telegram 频道转换为微博网站。它从公开的 Telegram 频道获取内容，并以网络博客的形式呈现，具有 RSS 订阅、SEO 优化和社交分享功能。

## 开发命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 代码检查
pnpm lint

# 修复代码规范问题
pnpm lint:fix
```

## 架构设计

### 核心组件

- **Astro 框架**: 支持 SSR，兼容多种适配器（Vercel、Cloudflare、Netlify、Node.js）
- **Telegram 集成**: 位于 `src/lib/telegram/index.js` - 处理 Telegram 频道内容的获取和解析
- **中间件**: `src/middleware.js` 处理缓存、RSS URL 生成和响应头
- **环境配置**: `src/lib/env.js` 管理不同部署平台的环境变量

### 关键目录

- `src/pages/`: Astro 页面，包括文章、分页、搜索和订阅的动态路由
- `src/components/`: 可复用的 Astro 组件（header、list、item）
- `src/layouts/`: 所有页面的基础布局
- `src/lib/`: 工具库（Telegram API、日期处理、语法高亮、环境配置）
- `src/assets/`: CSS 样式和 SVG 图标

### 部署适配器

项目通过 `astro.config.mjs` 支持多种部署平台：

- Vercel (serverless)
- Cloudflare Pages
- Netlify
- Node.js standalone

适配器会根据部署环境自动选择，也可通过 `SERVER_ADAPTER` 环境变量手动指定。

### 内容处理

内容获取和处理在 `src/lib/telegram/index.js` 中进行：

- 从 Telegram 公开频道视图获取 HTML
- 使用 Cheerio 解析内容
- 处理媒体、贴纸、代码块和链接预览
- 实现 LRU 缓存以提升性能
- 使用 Prism.js 处理代码语法高亮

### 配置选项

主要环境变量（除 CHANNEL 外都是可选的）：

- `CHANNEL`: Telegram 频道用户名（必需）
- `LOCALE`, `TIMEZONE`: 本地化设置
- 社交媒体集成: `TELEGRAM`, `TWITTER`, `GITHUB` 等
- SEO 设置: `NO_FOLLOW`, `NO_INDEX`
- 监控配置: `SENTRY_DSN`, `SENTRY_AUTH_TOKEN`, `SENTRY_PROJECT`

## ESLint 配置

使用 `@antfu/eslint-config` 并支持 Astro。允许使用 `info`、`warn`、`error` 控制台方法。

## Git 钩子

预提交钩子会运行 `pnpm lint-staged`，对所有暂存文件应用 ESLint 修复。

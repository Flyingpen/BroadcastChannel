# BroadcastChannel

**将你的 Telegram 频道转换为微博客**

一个基于 Astro 框架的现代化解决方案，让你的 Telegram 频道秒变精美博客！

---

[简体中文] | [English](./README.en.md)

## ✨ 特色功能

- **🚀 零配置启动** - 新手只需修改一个配置项就能部署博客
- **📱 将 Telegram 频道转换为微博客** - 自动同步频道内容，实时更新
- **🌓 深色模式支持** - 自动检测系统主题，支持手动切换
- **⚙️ 灵活配置系统** - 支持 JSON 配置文件和环境变量双重配置
- **🎨 完全自定义** - 自定义 CSS/JS、头部/底部代码注入、UI 文本本地化
- **🔍 SEO 友好** - 自动生成 `/sitemap.xml` 和完整的 SEO 标签
- **⚡ 极简前端** - 浏览器端零 JS（除了暗色模式切换按钮）
- **📡 多格式 RSS** - 支持 `/rss.xml` 和 `/rss.json` 双格式输出
- **🎯 一键部署** - 支持 Vercel、Netlify、Cloudflare Pages 等平台
- **🌍 多语言支持** - 内置多语言 UI，可完全自定义界面文字

## 🎯 新手 3 分钟快速部署指南

### 第一步：准备工作

1. **Fork 这个项目**到你的 GitHub 账号
2. **确保你的 Telegram 频道是公开的**（必须设置为公开频道）
3. **获取频道用户名**：从 `https://t.me/your_channel` 中复制 `your_channel` 部分

### 第二步：配置文件

1. **编辑配置文件**：打开项目根目录的 `broadcast.config.jsonc` 文件
2. **修改频道名**：将第 10 行的 `"CHANNEL": "your_channel_name"` 改成你的频道名
3. **保存文件**：其他配置项都有合理默认值，新手可以先不修改

### 第三步：一键部署

1. **选择平台**：推荐使用 [Vercel](https://vercel.com) 或 [Netlify](https://netlify.com)
2. **连接仓库**：在平台上连接你 Fork 的 GitHub 仓库
3. **自动部署**：平台会自动检测 Astro 项目并开始部署
4. **访问博客**：部署完成后，你的 Telegram 频道就变成精美博客了！

> 💡 **小贴士**：
>
> - 新手只需要修改 `CHANNEL` 一个配置项就能运行
> - 频道名例如：`https://t.me/miantiao_me` → 频道名是 `miantiao_me`
> - 如果内容为空，检查频道是否公开且未开启"限制保存内容"

## 🪧 在线演示

### 真实用户案例

- [面条实验室](https://memo.miantiao.me/)
- [Find Blog👁发现博客](https://broadcastchannel.pages.dev/)
- [Memos 广场 🎪](https://now.memobbs.app/)
- [APPDO 数字生活指南](https://mini.appdo.xyz/)
- [85.60×53.98卡粉订阅/提醒](https://tg.docofcard.com/)
- [新闻在花频道](https://tg.istore.app/)
- [ALL About RSS](https://blog.rss.tips/)
- [Charles Chin's Whisper](https://memo.eallion.com/)
- [PlayStation 新闻转发](https://playstationnews.pages.dev)
- [Yu's Life](https://daily.pseudoyu.com/)
- [Leslie 和朋友们](https://tg.imlg.co/)
- [OKHK 分享](https://tg.okhk.net/)
- [gledos 的微型博客](https://microblogging.gledos.science)
- [Steve Studio](https://tgc.surgeee.me/)
- [LiFePO4:沙雕吐槽](https://lifepo4.top)
- [Hotspot Hourly](https://hourly.top/)
- [大河马中文财经新闻分享](https://a.xiaomi318.com/)
- [\_My. Tricks 🎩 Collection](https://channel.mykeyvans.com)
- [小报童专栏精选](https://xiaobaotong.genaiprism.site/)
- [Fake news](https://fake-news.csgo.ovh/)
- [miyi23's Geekhub资源分享](https://gh.miyi23.top/)
- [Magazine｜期刊杂志｜财新周刊](https://themagazine.top)
- [Remote Jobs & Cooperation](https://share-remote-jobs.vercel.app/)
- [甬哥侃侃侃--频道发布](https://ygkkktg.pages.dev)
- [Fugoou.log](https://fugoou.xyz)
- [Bboysoul的博客](https://tg.bboy.app/)
- [MakerHunter](https://share.makerhunter.com/)
- [ChatGPT/AI新闻聚合](https://g4f.icu/)
- [Abner's memos](https://memos.abnerz6.top/)
- [Appinn Talk](https://talk.appinn.net/)
- [小报童优惠与排行榜](https://youhui.xiaobaoto.com/)

### 官方演示平台

1. [Cloudflare Pages](https://broadcast-channel.pages.dev/)
2. [Netlify](https://broadcast-channel.netlify.app/)
3. [Vercel](https://broadcast-channel.vercel.app/)

BroadcastChannel 支持部署到支持 Node.js SSR 的无服务器平台，如 Cloudflare、Netlify、Vercel，也可以部署到 VPS。
详细教程请参考 [Astro 部署指南](https://docs.astro.build/zh-cn/guides/deploy/)。

## 🆕 最新升级亮点

### 🚀 框架全面升级

- **Astro v4 → v5**: 升级到最新稳定版，性能和开发体验全面提升
- **依赖安全优化**: 修复 39 个安全漏洞，仅剩 1 个低危漏洞
- **构建优化**: 更快的构建速度和更小的包体积

### 🌓 全新深色模式

- **智能主题检测**: 自动识别系统偏好（深色/浅色模式）
- **一键切换**: 导航栏新增太阳/月亮切换按钮
- **持久化存储**: 用户选择会保存到 localStorage
- **完整适配**: 所有组件和页面完美支持深色模式

### ⚙️ 统一配置系统

- **JSONC 支持**: 配置文件支持注释，新手友好
- **优先级管理**: JSON 配置 > 环境变量 > 默认值
- **逐行注释**: 每个配置项都有详细中文说明
- **零配置启动**: 新手只需修改频道名即可运行

### 🎨 完全自定义化

- **代码注入**: 支持自定义 CSS/JS、头部/底部代码注入
- **UI 文本**: 所有界面文字可自定义，支持多语言
- **主题色**: 可自定义网站主题色和样式
- **高级功能**: SEO 设置、错误监控、缓存配置等

## 🧱 技术栈

- **前端框架**: [Astro v5](https://astro.build/) - 现代化的全栈 Web 框架
- **内容管理**: [Telegram 频道](https://telegram.org/tour/channels) - 零成本的内容管理系统
- **设计模板**: [Sepia](https://github.com/Planetable/SiteTemplateSepia) - 简洁优雅的博客模板
- **主题系统**: CSS 自定义属性 + localStorage 持久化
- **配置管理**: JSONC（支持注释的 JSON）+ 环境变量双重支持
- **代码质量**: ESLint + Anthony Fu 配置规范

## 🏗️ 部署指南

### 🐳 Docker 部署

```bash
# 拉取镜像
docker pull ghcr.io/ccbikai/broadcastchannel:main

# 运行容器（替换 your_channel_name 为你的频道名）
docker run -d --name broadcastchannel \
  -p 4321:4321 \
  -e CHANNEL=your_channel_name \
  ghcr.io/ccbikai/broadcastchannel:main
```

### ☁️ 无服务器部署（推荐）

#### 方式一：使用配置文件（推荐新手）

1. [Fork](https://github.com/ccbikai/BroadcastChannel/fork) 项目到你的 GitHub
2. 修改 `broadcast.config.jsonc` 中的 `CHANNEL` 配置
3. 在 Cloudflare/Netlify/Vercel 创建项目
4. 选择 `BroadcastChannel` 项目和 `Astro` 框架
5. 保存并部署

#### 方式二：使用环境变量

1. [Fork](https://github.com/ccbikai/BroadcastChannel/fork) 项目到你的 GitHub
2. 在 Cloudflare/Netlify/Vercel 创建项目
3. 配置环境变量 `CHANNEL=你的频道名`
4. 保存并部署

#### 部署后操作

- **绑定域名**（可选）：在平台设置中绑定自定义域名
- **更新代码**：参考 GitHub 官方文档 [同步 Fork 分支](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui)

## ⚒️ 配置指南

### 🚀 快速开始（新手推荐）

**新手只需要 3 步就能运行博客：**

1. **Fork 项目**：项目已包含 `broadcast.config.jsonc` 配置文件
2. **修改频道名**：将第 10 行的 `"CHANNEL": "your_channel_name"` 改成你的频道名
3. **部署运行**：就这么简单！

> 💡 **获取频道名方法**：
>
> - 如果你的频道链接是 `https://t.me/miantiao_me`，那么频道名就是 `miantiao_me`
> - 频道必须设置为**公开频道**，并关闭"限制保存内容"选项

### 📄 详细配置说明

项目根目录的 `broadcast.config.jsonc` 文件包含了所有配置选项，每一行都有详细的中文注释说明。配置文件支持 JSON 注释，新手友好！

#### 🎯 新手必填配置（只需要这一个！）

- **`CHANNEL`**: 你的 Telegram 频道用户名（必填）

#### 🌍 推荐配置（可选，有合理默认值）

- **`LOCALE`**: 语言设置（如 `zh-CN`、`en`、`ja`）
- **`TIMEZONE`**: 时区设置（如 `Asia/Shanghai`、`America/New_York`）
- **`SITE_TITLE`**: 网站标题（不设置则使用频道标题）
- **`SITE_DESCRIPTION`**: 网站描述（不设置则使用频道描述）

#### 🎨 个性化配置（让你的博客更有特色）

- **社交媒体链接**: `TELEGRAM`、`TWITTER`、`GITHUB`、`MASTODON`、`BLUESKY`
- **界面文字自定义**: `UI_TEXT` - 支持完全自定义所有界面文字
- **主题外观**: `THEME_COLOR` - 自定义网站主题色
- **功能开关**: `TAGS`（标签页）、`LINKS`（友链页）、`RSS_BEAUTIFY`（RSS美化）

#### 🔧 高级配置（进阶用户）

- **SEO 设置**: `NO_FOLLOW`、`NO_INDEX` - 搜索引擎优化
- **代码注入**: `HEADER_INJECT`、`FOOTER_INJECT`、`CUSTOM_CSS`、`CUSTOM_JS`
- **错误监控**: Sentry 相关配置
- **系统设置**: 缓存、代理等高级选项

### 🌍 方式二：环境变量配置

如果你更喜欢使用环境变量配置（适合在 Vercel/Netlify 等平台配置），可以设置以下环境变量：

```env
## 🚨 必填：Telegram 频道用户名（t.me/ 后面的部分）
CHANNEL=your_channel_name

## 🌍 语言和时区设置，语言选项参考 [dayjs](https://github.com/iamkun/dayjs/tree/dev/src/locale)
LOCALE=zh-CN
TIMEZONE=Asia/Shanghai

## 🏠 网站基本信息
SITE_TITLE=我的微博客
SITE_DESCRIPTION=基于 Telegram 频道的个人微博客

## 🔗 社交媒体用户名
TELEGRAM=your_telegram_username
TWITTER=your_twitter_username
GITHUB=your_github_username
MASTODON=mastodon.social/@your_username
BLUESKY=your_username.bsky.social

## 🔗 以下两个需要完整 URL
DISCORD=https://discord.gg/your_invite
PODCAST=https://your-podcast.com

## 🎨 自定义外观
THEME_COLOR=#f4f1ec
CUSTOM_CSS=/* 你的自定义 CSS */
CUSTOM_JS=// 你的自定义 JavaScript
HEADER_INJECT=<!-- 自定义头部代码 -->
FOOTER_INJECT=<!-- 自定义底部代码 -->

## 🔍 SEO 配置选项，可阻止搜索引擎索引内容
NO_FOLLOW=false
NO_INDEX=false

## 📊 Sentry 错误监控配置（可选）
SENTRY_AUTH_TOKEN=你的_SENTRY_认证令牌
SENTRY_DSN=你的_SENTRY_DSN
SENTRY_PROJECT=你的_SENTRY_项目名

## ⚙️ 系统设置（一般不需要修改）
HOST=telegram.dog
STATIC_PROXY=/static/

## 🔍 启用谷歌站内搜索
GOOGLE_SEARCH_SITE=yourdomain.com

## 🏷️ 启用标签页，用逗号分隔标签
TAGS=技术,生活,随想

## 💬 显示评论功能
COMMENTS=true

## 🔗 友链页面链接列表，用逗号和分号分隔
LINKS=标题1,链接1;标题2,链接2;标题3,链接3

## 📋 侧边栏导航项目，用逗号和分号分隔
NAVS=标题1,链接1;标题2,链接2;标题3,链接3

## 📡 启用 RSS 美化
RSS_BEAUTIFY=true
```

### ⚖️ 配置优先级

配置值按以下优先级顺序应用（从高到低）：

1. **JSON 配置文件** (`broadcast.config.jsonc`)
2. **环境变量**
3. **默认值**

### 🌙 深色模式

应用程序会自动检测你的系统色彩方案偏好并应用相应主题。用户可以使用头部的主题切换按钮手动在明亮和深色模式之间切换。

- **自动检测**: 遵循 `prefers-color-scheme` 媒体查询
- **手动切换**: 点击太阳/月亮图标切换主题
- **持久化**: 用户偏好保存到 localStorage

## 🙋🏻 常见问题

**1. 为什么部署后内容为空？**

- 检查频道是否为公开频道（必须是公开的）
- 频道用户名是字符串，不是数字
- 关闭频道的"限制保存内容"设置
- 修改环境变量后重新部署
- Telegram 可能阻止一些敏感频道的公开显示，可以访问 `https://t.me/s/频道用户名` 验证

**2. 如何自定义样式？**

- 使用 `CUSTOM_CSS` 配置项添加自定义 CSS
- 使用 `THEME_COLOR` 修改主题色
- 使用 `HEADER_INJECT` 和 `FOOTER_INJECT` 注入自定义代码

**3. 支持哪些部署平台？**

- ✅ Vercel（推荐）
- ✅ Netlify
- ✅ Cloudflare Pages
- ✅ Docker/VPS
- ✅ 其他支持 Node.js SSR 的平台

## ☕ 支持项目

如果这个项目对你有帮助，欢迎支持：

1. [关注 Telegram 频道](https://t.me/miantiao_me)
2. [关注 𝕏 (Twitter)](https://404.li/kai)
3. [GitHub 赞助](https://github.com/sponsors/ccbikai)
4. ⭐ 给项目点个星星

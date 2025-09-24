# BroadcastChannel

**将你�?Telegram 频道转换为微博客**

一个基�?Astro 框架的现代化解决方案，让你的 Telegram 频道秒变精美博客�?

---

[简体中文] | [English](./README.en.md)

## �?特色功能

- \*_🚀 零配置启�?_ - 新手只需修改一个配置项就能部署博客
- **📱 �?Telegram 频道转换为微博客** - 自动同步频道内容，实时更�?
- **🌓 深色模式支持** - 自动检测系统主题，支持手动切换
- **⚙️ 灵活配置系统** - 支持 JSON 配置文件和环境变量双重配�?
- \*_🎨 完全自定�?_ - 自定�?CSS/JS、头�?底部代码注入、UI 文本本地�?
- **🔍 SEO 友好** - 自动生成 `/sitemap.xml` 和完整的 SEO 标签
- **�?极简前端** - 浏览器端�?JS（除了暗色模式切换按钮）
- **📡 多格�?RSS** - 支持 `/rss.xml` �?`/rss.json` 双格式输�?
- \*_🎯 一键部�?_ - 支持 Vercel、Netlify、Cloudflare Pages 等平�?
- **🌍 多语言支持** - 内置多语言 UI，可完全自定义界面文�?

## 🎯 新手 3 分钟快速部署指�?

### 第一步：准备工作

1. **Fork 这个项目**到你�?GitHub 账号
2. \*_确保你的 Telegram 频道是公开�?_（必须设置为公开频道�?
3. \*_获取频道用户�?_：从 `https://t.me/your_channel` 中复�?`your_channel` 部分

### 第二步：配置文件

1. **编辑配置文件**：打开项目根目录的 `broadcast.config.jsonc` 文件
2. \*_修改频道�?_：将�?10 行的 `"CHANNEL": "your_channel_name"` 改成你的频道�?
3. **保存文件**：其他配置项都有合理默认值，新手可以先不修改

### 第三步：一键部�?

1. **选择平台**：推荐使�?[Vercel](https://vercel.com) �?[Netlify](https://netlify.com)
2. **连接仓库**：在平台上连接你 Fork �?GitHub 仓库
3. **自动部署**：平台会自动检�?Astro 项目并开始部�?
4. **访问博客**：部署完成后，你�?Telegram 频道就变成精美博客了�?

> 💡 \**小贴�?*�?
>
> - 新手只需要修�?`CHANNEL` 一个配置项就能运行
> - 频道名例如：`https://t.me/miantiao_me` �?频道名是 `miantiao_me`
> - 如果内容为空，检查频道是否公开且未开�?限制保存内容"

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
- [甬哥侃侃�?-频道发布](https://ygkkktg.pages.dev)
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

BroadcastChannel 支持部署到支�?Node.js SSR 的无服务器平台，�?Cloudflare、Netlify、Vercel，也可以部署�?VPS�?
详细教程请参�?[Astro 部署指南](https://docs.astro.build/zh-cn/guides/deploy/)�?

## 🆕 最新升级亮�?

### 🚀 框架全面升级

- **Astro v4 �?v5**: 升级到最新稳定版，性能和开发体验全面提�?
- **依赖安全优化**: 修复 39 个安全漏洞，仅剩 1 个低危漏�?
- **构建优化**: 更快的构建速度和更小的包体�?

### 🌓 全新深色模式

- \*_智能主题检�?_: 自动识别系统偏好（深�?浅色模式�?
- \*_一键切�?_: 导航栏新增太�?月亮切换按钮
- \*_持久化存�?_: 用户选择会保存到 localStorage
- **完整适配**: 所有组件和页面完美支持深色模式

### ⚙️ 统一配置系统

- **JSONC 支持**: 配置文件支持注释，新手友�?
- \*_优先级管�?_: JSON 配置 > 环境变量 > 默认�?
- **逐行注释**: 每个配置项都有详细中文说�?
- \*_零配置启�?_: 新手只需修改频道名即可运�?

### 🎨 完全自定义化

- **代码注入**: 支持自定�?CSS/JS、头�?底部代码注入
- **UI 文本**: 所有界面文字可自定义，支持多语言
- \*_主题�?_: 可自定义网站主题色和样式
- **高级功能**: SEO 设置、错误监控、缓存配置等

## 🧱 技术栈

- **前端框架**: [Astro v5](https://astro.build/) - 现代化的全栈 Web 框架
- **内容管理**: [Telegram 频道](https://telegram.org/tour/channels) - 零成本的内容管理系统
- **设计模板**: [Flyingpen](https://github.com/Flyingpen) - 简洁优雅的博客模板
- **主题系统**: CSS 自定义属�?+ localStorage 持久�?
- **配置管理**: JSONC（支持注释的 JSON�? 环境变量双重支持
- **代码质量**: ESLint + Anthony Fu 配置规范

## 🏗�?部署指南

### 📋 部署配置速查�?

| 部署类型     | 平台示例                                | 框架预设 | 根目�? | 输出目录 | 编译命令         | 安装命令       |
| ------------ | --------------------------------------- | -------- | ------ | -------- | ---------------- | -------------- |
| \*_动态部�?_ | Vercel<br/>Netlify<br/>Cloudflare Pages | `Astro`  | `./`   | `dist`   | `pnpm run build` | `pnpm install` |

### 🔧 部署前准�?

#### 1. ������������

```env
CHANNEL=���Ƶ����
```

```env
LOCALE=zh-CN
TIMEZONE=Asia/Shanghai
SITE_TITLE=���վ�����
SITE_DESCRIPTION=���վ������
```

#### 2. 确认频道设置

- �?频道必须�?\*公开频道\*\*
- �?关闭"限制保存内容"选项
- �?获取频道用户名：�?`https://t.me/your_channel` 中获�?`your_channel`

### �?赞助

1. [�?Telegram 关注我](https://t.me/miantiao_me)
2. [�?𝕏 上关注我](https://404.li/x)
3. [�?GitHub 赞助我](https://github.com/Flyingpen)

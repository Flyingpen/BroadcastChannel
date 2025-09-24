# 广播频道

\*_将你�?Telegram Channel 转为微博客�?_

---

[English](./README.md) | 简体中�?

## �?特�?

- \*_�?Telegram Channel 转为微博�?_
- **SEO 友好** `/sitemap.xml`
- **浏览器端 0 JS**
- **提供 RSS �?RSS JSON** `/rss.xml` `/rss.json`

## 🪧 演示

### 真实用户

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
- [小众软件的发现](https://talk.appinn.net/)
- [小报童优惠与排行榜](https://youhui.xiaobaoto.com/)

### 平台

1. [Cloudflare](https://broadcast-channel.pages.dev/)
2. [Netlify](https://broadcast-channel.netlify.app/)
3. [Vercel](https://broadcast-channel.vercel.app/)

广播频道支持部署�?Cloudflare、Netlify、Vercel 等支�?Node.js SSR 的无服务器平台或�?VPS�?
具体教程见[部署你的 Astro 站点](https://docs.astro.build/zh-cn/guides/deploy/)�?

## 🧱 技术栈

- 框架：[Astro](https://astro.build/)
- 内容管理系统：[Telegram Channels](https://telegram.org/tour/channels)
- 模板: [Flyingpen](https://github.com/Flyingpen)

## 🏗�?部署

### Docker

1. `docker pull ghcr.io/ccbikai/broadcastchannel:main`
2. `docker run -d --name broadcastchannel -p 4321:4321 -e CHANNEL=miantiao_me ghcr.io/ccbikai/broadcastchannel:main`

### Serverless

1. [Fork](https://github.com/Flyingpen/BroadcastChannel/fork) 此项目到�?GitHub
2. �?Cloudflare/Netlify/Vercel 创建项目
3. 选择 `BroadcastChannel` 项目�?`Astro` 框架
4. 配置环境变量 `CHANNEL` 为你的频道名称。此为最小化配置，更多配置见下面的配置项
5. 保存并部�?
6. 绑定域名（可选）�?
7. 更新代码，参�?GitHub 官方文档 [�?Web UI 同步分叉分支](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui)�?

## ⚒️ 配置

``env

## Telegram 频道用户名，必须配置�?t.me/ 后面那串字符

CHANNEL=miantiao_me

## 语言和时区设置，语言选项见[dayjs](https://github.com/iamkun/dayjs/tree/dev/src/locale)

LOCALE=zh-cn
TIMEZONE=Asia/Shanghai

## 社交媒体用户�?

TELEGRAM=your_telegram_username
TWITTER=your_twitter_username
GITHUB=your_github_username

## 下面两个社交媒体需要为 URL

DISCORD=
PODCAST=

## 头部尾部代码注入，支�?HTML

FOOTER_INJECT=
HEADER_INJECT=

## SEO 配置项，可不让搜索引擎索引内�?

NO_FOLLOW=false
NO_INDEX=false

## Sentry 配置项，收集服务端报�?

SENTRY_AUTH_TOKEN=SENTRY_AUTH_TOKEN
SENTRY_DSN=SENTRY_DSN
SENTRY_PROJECT=SENTRY_PROJECT

## Telegram 主机名称和静态资源代理，不建议修�?

HOST=telegram.dog
STATIC_PROXY=

## 启用谷歌站内搜索

GOOGLE_SEARCH_SITE=memo.miantiao.me

## 启用标签�? 标签使用英文逗号分割

TAGS=标签A,标签B,标签C

## 展示评论

COMMENTS=true

## 链接页面中的超链�? 使用英文逗号和分号分�?

LINKS=Title1,URL1;Title2,URL3;Title3,URL3;

## 侧边栏导航项, 使用英文逗号和分号分�?

NAVS=Title1,URL1;Title2,URL3;Title3,URL3;

## 启用 RSS 美化

RSS_BEAUTIFY=true

```

## 🙋🏻 常问问题

1. 为什么部署后内容为空�?
   - 检查频道是否是公开的，必须是公开�?
   - 频道用户名是字符串，不是数字
   - 关闭频道 Restricting Saving Content 设置�?
   - 修改完环境变量后需要重新部�?
   - Telegram 会屏蔽一些敏感频道的公开展示�?可以通过访问 `https://t.me/s/频道用户名` 确认

## �?赞助

您可以选择移除此部分，或者添加您自己的赞助链接�?
```

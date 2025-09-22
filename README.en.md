# BroadcastChannel

**Turn your Telegram Channel into a MicroBlog.**

A modern solution based on the Astro framework that transforms your Telegram channel into a beautiful blog in seconds!

---

[English] | [简体中文](./README.md)

## ✨ Features

- **🚀 Zero Configuration Startup** - Beginners only need to modify one configuration item to deploy a blog
- **📱 Turn Telegram Channel into MicroBlog** - Automatically sync channel content with real-time updates
- **🌓 Dark Mode Support** - Auto-detect system theme with manual toggle
- **⚙️ Flexible Configuration** - Support both JSON config file and environment variables
- **🎨 Full Customization** - Custom CSS/JS, header/footer injection, UI text localization
- **🔍 SEO Friendly** - Auto-generate `/sitemap.xml` and complete SEO tags
- **⚡ Minimal Frontend** - 0 JS on the browser side (except for dark mode toggle)
- **📡 Multi-format RSS** - Support both `/rss.xml` and `/rss.json` output
- **🎯 One-click Deployment** - Support Vercel, Netlify, Cloudflare Pages and more
- **🌍 Multi-language Support** - Built-in multi-language UI with full text customization

## 🎯 Quick 3-Minute Deployment Guide

### Step 1: Preparation

1. **Fork this project** to your GitHub account
2. **Ensure your Telegram channel is public** (must be set as public channel)
3. **Get channel username**: Copy the `your_channel` part from `https://t.me/your_channel`

### Step 2: Configuration

1. **Edit config file**: Open `broadcast.config.jsonc` in project root
2. **Modify channel name**: Change line 10 `"CHANNEL": "your_channel_name"` to your channel name
3. **Save file**: Other config items have reasonable defaults, beginners can skip them

### Step 3: One-click Deploy

1. **Choose platform**: Recommend [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
2. **Connect repository**: Connect your forked GitHub repository on the platform
3. **Auto deploy**: Platform will auto-detect Astro project and start deployment
4. **Access blog**: After deployment, your Telegram channel becomes a beautiful blog!

> 💡 **Tips**:
>
> - Beginners only need to modify the `CHANNEL` configuration
> - Channel name example: `https://t.me/miantiao_me` → channel name is `miantiao_me`
> - If content is empty, check if channel is public and "Restrict Saving Content" is disabled

## 🪧 Live Demo

### Real User Cases

- [Miantiao Lab](https://memo.miantiao.me/)
- [Find Blog👁Discover Blogs](https://broadcastchannel.pages.dev/)
- [Memos Square 🎪](https://now.memobbs.app/)
- [APPDO Digital Life Guide](https://mini.appdo.xyz/)
- [85.60×53.98 Card Fan Subscription/Reminder](https://tg.docofcard.com/)
- [News in Flower Channel](https://tg.istore.app/)
- [ALL About RSS](https://blog.rss.tips/)
- [Charles Chin's Whisper](https://memo.eallion.com/)
- [PlayStation News Forward](https://playstationnews.pages.dev)
- [Yu's Life](https://daily.pseudoyu.com/)
- [Leslie and Friends](https://tg.imlg.co/)
- [OKHK Share](https://tg.okhk.net/)
- [gledos' Micro Blog](https://microblogging.gledos.science)
- [Steve Studio](https://tgc.surgeee.me/)
- [LiFePO4: Silly Complaints](https://lifepo4.top)
- [Hotspot Hourly](https://hourly.top/)

### Official Demo Platforms

1. [Cloudflare Pages](https://broadcast-channel.pages.dev/)
2. [Netlify](https://broadcast-channel.netlify.app/)
3. [Vercel](https://broadcast-channel.vercel.app/)

BroadcastChannel supports deployment on serverless platforms like Cloudflare, Netlify, Vercel that support Node.js SSR, or on a VPS.
For detailed tutorials, see [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/).

## 🆕 Latest Upgrade Highlights

### 🚀 Framework Major Upgrade

- **Astro v4 → v5**: Upgraded to latest stable version with improved performance and development experience
- **Security Optimization**: Fixed 39 security vulnerabilities, only 1 low-risk vulnerability remaining
- **Build Optimization**: Faster build speed and smaller bundle size

### 🌓 Brand New Dark Mode

- **Smart Theme Detection**: Auto-detect system preference (dark/light mode)
- **One-click Toggle**: New sun/moon toggle button in navigation
- **Persistent Storage**: User choice saved to localStorage
- **Complete Adaptation**: All components and pages perfectly support dark mode

### ⚙️ Unified Configuration System

- **JSONC Support**: Configuration file supports comments, beginner-friendly
- **Priority Management**: JSON config > environment variables > default values
- **Line-by-line Comments**: Each configuration item has detailed Chinese explanations
- **Zero-config Startup**: Beginners only need to modify channel name to run

### 🎨 Complete Customization

- **Code Injection**: Support custom CSS/JS, header/footer code injection
- **UI Text**: All interface text customizable, multi-language support
- **Theme Color**: Customizable website theme color and styles
- **Advanced Features**: SEO settings, error monitoring, cache configuration, etc.

## 🧱 Tech Stack

- **Frontend Framework**: [Astro v5](https://astro.build/) - Modern full-stack web framework
- **Content Management**: [Telegram Channels](https://telegram.org/tour/channels) - Zero-cost content management system
- **Design Template**: [Sepia](https://github.com/Planetable/SiteTemplateSepia) - Clean and elegant blog template
- **Theme System**: CSS custom properties + localStorage persistence
- **Configuration Management**: JSONC (JSON with Comments) + environment variables dual support
- **Code Quality**: ESLint + Anthony Fu configuration standards

## 🏗️ Deployment Guide

### 🐳 Docker Deployment

```bash
# Pull image
docker pull ghcr.io/ccbikai/broadcastchannel:main

# Run container (replace your_channel_name with your channel name)
docker run -d --name broadcastchannel \
  -p 4321:4321 \
  -e CHANNEL=your_channel_name \
  ghcr.io/ccbikai/broadcastchannel:main
```

### ☁️ Serverless Deployment (Recommended)

#### Method 1: Using Config File (Recommended for Beginners)

1. [Fork](https://github.com/ccbikai/BroadcastChannel/fork) project to your GitHub
2. Modify `CHANNEL` configuration in `broadcast.config.jsonc`
3. Create project on Cloudflare/Netlify/Vercel
4. Select `BroadcastChannel` project and `Astro` framework
5. Save and deploy

#### Method 2: Using Environment Variables

1. [Fork](https://github.com/ccbikai/BroadcastChannel/fork) project to your GitHub
2. Create project on Cloudflare/Netlify/Vercel
3. Configure environment variable `CHANNEL=your_channel_name`
4. Save and deploy

#### Post-deployment Operations

- **Bind Domain** (optional): Bind custom domain in platform settings
- **Update Code**: Refer to GitHub official docs [Syncing a fork branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-web-ui)

## ⚒️ Configuration Guide

### 🚀 Quick Start (Recommended for Beginners)

**Beginners only need 3 steps to run the blog:**

1. **Fork Project**: Project already includes `broadcast.config.jsonc` config file
2. **Modify Channel Name**: Change line 10 `"CHANNEL": "your_channel_name"` to your channel name
3. **Deploy and Run**: That's it!

> 💡 **How to get channel name**:
>
> - If your channel link is `https://t.me/miantiao_me`, then channel name is `miantiao_me`
> - Channel must be set as **public channel** and disable "Restrict Saving Content" option

### 📄 Detailed Configuration

The `broadcast.config.jsonc` file in project root contains all configuration options with detailed Chinese comments. Config file supports JSON comments, beginner-friendly!

#### 🎯 Required Configuration for Beginners (Only need this one!)

- **`CHANNEL`**: Your Telegram channel username (required)

#### 🌍 Recommended Configuration (Optional, has reasonable defaults)

- **`LOCALE`**: Language setting (e.g., `zh-CN`, `en`, `ja`)
- **`TIMEZONE`**: Timezone setting (e.g., `Asia/Shanghai`, `America/New_York`)
- **`SITE_TITLE`**: Website title (uses channel title if not set)
- **`SITE_DESCRIPTION`**: Website description (uses channel description if not set)

#### 🎨 Personalization Configuration (Make your blog unique)

- **Social Media Links**: `TELEGRAM`, `TWITTER`, `GITHUB`, `MASTODON`, `BLUESKY`
- **UI Text Customization**: `UI_TEXT` - Support complete customization of all interface text
- **Theme Appearance**: `THEME_COLOR` - Customize website theme color
- **Feature Toggles**: `TAGS` (tags page), `LINKS` (links page), `RSS_BEAUTIFY` (RSS beautification)

#### 🔧 Advanced Configuration (Advanced Users)

- **SEO Settings**: `NO_FOLLOW`, `NO_INDEX` - Search engine optimization
- **Code Injection**: `HEADER_INJECT`, `FOOTER_INJECT`, `CUSTOM_CSS`, `CUSTOM_JS`
- **Error Monitoring**: Sentry related configurations
- **System Settings**: Cache, proxy and other advanced options

### 🌍 Method 2: Environment Variables

If you prefer using environment variables (suitable for Vercel/Netlify platforms), you can set the following environment variables:

```env
## 🚨 Required: Telegram channel username (part after t.me/)
CHANNEL=your_channel_name

## 🌍 Language and timezone settings, language options see [dayjs](https://github.com/iamkun/dayjs/tree/dev/src/locale)
LOCALE=en
TIMEZONE=America/New_York

## 🏠 Website basic information
SITE_TITLE=My MicroBlog
SITE_DESCRIPTION=A microblog powered by Telegram channel

## 🔗 Social media usernames
TELEGRAM=your_telegram_username
TWITTER=your_twitter_username
GITHUB=your_github_username
MASTODON=mastodon.social/@your_username
BLUESKY=your_username.bsky.social

## 🔗 Following two need complete URLs
DISCORD=https://discord.gg/your_invite
PODCAST=https://your-podcast.com

## 🎨 Custom appearance
THEME_COLOR=#f4f1ec
CUSTOM_CSS=/* Your custom CSS */
CUSTOM_JS=// Your custom JavaScript
HEADER_INJECT=<!-- Custom header code -->
FOOTER_INJECT=<!-- Custom footer code -->

## 🔍 SEO configuration options, can prevent search engines from indexing content
NO_FOLLOW=false
NO_INDEX=false

## 📊 Sentry error monitoring configuration (optional)
SENTRY_AUTH_TOKEN=your_sentry_auth_token
SENTRY_DSN=your_sentry_dsn
SENTRY_PROJECT=your_sentry_project

## ⚙️ System settings (generally no need to modify)
HOST=telegram.dog
STATIC_PROXY=/static/

## 🔍 Enable Google site search
GOOGLE_SEARCH_SITE=yourdomain.com

## 🏷️ Enable tags page, separate tags with commas
TAGS=tech,life,thoughts

## 💬 Show comments feature
COMMENTS=true

## 🔗 Links page link list, separate with commas and semicolons
LINKS=Title1,Link1;Title2,Link2;Title3,Link3

## 📋 Sidebar navigation items, separate with commas and semicolons
NAVS=Title1,Link1;Title2,Link2;Title3,Link3

## 📡 Enable RSS beautification
RSS_BEAUTIFY=true
```

### ⚖️ Configuration Priority

Configuration values are applied in the following priority order (highest to lowest):

1. **JSON configuration file** (`broadcast.config.jsonc`)
2. **Environment variables**
3. **Default values**

### 🌙 Dark Mode

The application automatically detects your system's color scheme preference and applies the appropriate theme. Users can manually toggle between light and dark modes using the theme toggle button in the header.

- **Auto-detection**: Respects `prefers-color-scheme` media query
- **Manual toggle**: Click the sun/moon icon to switch themes
- **Persistent**: User preference is saved to localStorage

## 🙋🏻 FAQs

**1. Why is the content empty after deployment?**

- Check if the channel is public (must be public)
- The channel username is a string, not a number
- Turn off the "Restricting Saving Content" setting in the channel
- Redeploy after modifying environment variables
- Telegram blocks public display of some sensitive channels, verify by visiting `https://t.me/s/channelusername`

**2. How to customize styles?**

- Use `CUSTOM_CSS` configuration to add custom CSS
- Use `THEME_COLOR` to modify theme color
- Use `HEADER_INJECT` and `FOOTER_INJECT` to inject custom code

**3. Which deployment platforms are supported?**

- ✅ Vercel (Recommended)
- ✅ Netlify
- ✅ Cloudflare Pages
- ✅ Docker/VPS
- ✅ Other platforms supporting Node.js SSR

## ☕ Support the Project

If this project helps you, welcome to support:

1. [Follow Telegram Channel](https://t.me/miantiao_me)
2. [Follow 𝕏 (Twitter)](https://404.li/kai)
3. [GitHub Sponsor](https://github.com/sponsors/ccbikai)
4. ⭐ Star the project

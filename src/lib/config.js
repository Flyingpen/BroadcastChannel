import { getEnv } from './env.js'

/**
 * 配置系统 - 支持 JSON 配置文件和环境变量
 * 优先级：JSON 配置 > 环境变量 > 默认值
 */

// 默认配置 - 从 broadcast.config.jsonc 合并
const DEFAULT_CONFIG = {
  // 📺 基础配置
  CHANNEL: 'RantGroup', // Telegram 频道用户名（必需）
  LOCALE: 'zh-CN', // 语言设置
  TIMEZONE: 'Asia/Shanghai', // 时区设置

  // 🏠 网站信息
  SITE_TITLE: '我的微博客', // 网站标题
  SITE_DESCRIPTION: '基于 Telegram 频道的个人微博客', // 网站描述
  SITE_URL: 'https://123.911016.xyz', // 网站 URL

  // 🔗 社交媒体链接
  TELEGRAM: 'https://t.me/s8jackeylove', // Telegram 用户名
  TWITTER: '', // Twitter 用户名
  GITHUB: 'https://github.com/Flyingpen', // GitHub 用户名
  MASTODON: '', // Mastodon 地址
  BLUESKY: '', // BlueSky 地址
  DISCORD: '', // Discord 邀请链接
  PODCAST: '', // 播客链接

  // 📑 功能开关
  COMMENTS: true, // 显示评论
  RSS_BEAUTIFY: true, // RSS 美化
  GOOGLE_SEARCH_SITE: '', // 谷歌站内搜索域名

  // 🛡️ SEO 配置
  NO_FOLLOW: false, // nofollow 设置
  NO_INDEX: false, // noindex 设置

  // 🎨 主题和样式
  THEME_COLOR: '#f4f1ec', // 主题色
  HEADER_INJECT: '', // 头部注入代码
  FOOTER_INJECT: '', // 底部注入代码

  // 📑 导航和页面
  TAGS: '技术,生活,随想', // 标签列表（逗号分隔）
  LINKS: '友站1,https://example1.com;友站2,https://example2.com', // 友链列表
  NAVS: '', // 导航栏链接（格式：标题1,链接1;标题2,链接2）

  // ⚙️ 高级配置
  HOST: 'telegram.dog', // Telegram 主机名
  STATIC_PROXY: '/static/', // 静态资源代理路径

  // 📊 监控和分析
  SENTRY_DSN: '', // Sentry 错误监控 DSN
  SENTRY_AUTH_TOKEN: '', // Sentry 认证令牌
  SENTRY_PROJECT: '', // Sentry 项目名

  // 🎯 自定义样式
  CUSTOM_CSS: '', // 自定义 CSS
  CUSTOM_JS: '', // 自定义 JavaScript

  // ⚙️ 缓存配置
  CACHE_TTL: 300, // 缓存时间（秒）

  // 🔍 内容过滤
  BLOCKED_WORDS: '', // 屏蔽词列表（逗号分隔）
  MIN_CONTENT_LENGTH: 10, // 最小内容长度

  // 🌏 多语言支持
  UI_TEXT: {
    home: '首页',
    search: '搜索',
    tags: '标签',
    links: '友链',
    poweredBy: '技术支持',
  }, // UI 文本自定义
}

/**
 * 从 JSON/JSONC 文件加载配置
 * @param {string} configPath - 配置文件路径
 * @returns {object} 配置对象
 */
async function loadConfigFromFile(configPath) {
  // 尝试加载的文件路径列表
  const configPaths = configPath
    ? [configPath]
    : [
        './broadcast.config.jsonc', // 优先加载 JSONC 格式（支持注释）
        './broadcast.config.json', // 其次加载 JSON 格式
      ]

  for (const path of configPaths) {
    try {
      const fs = await import('node:fs/promises')
      const content = await fs.readFile(path, 'utf-8')

      // 移除 JSON 注释（简单的实现）
      const cleanContent = content
        .replace(/\/\*[\s\S]*?\*\//g, '') // 移除 /* */ 注释
        .replace(/\/\/.*$/gm, '') // 移除 // 注释

      return JSON.parse(cleanContent)
    }
    catch {
      // 继续尝试下一个文件
      continue
    }
  }

  // 所有文件都不存在或解析错误，返回空对象
  return {}
}

/**
 * 获取配置值
 * @param {object} env - Astro 环境变量对象
 * @param {object} astro - Astro 对象
 * @param {string} key - 配置键
 * @param {*} defaultValue - 默认值
 * @returns {*} 配置值
 */
export function getConfig(env, astro, key, defaultValue = null) {
  // 1. 首先从环境变量获取（最高优先级）
  const envValue = getEnv(env, astro, key)
  if (envValue !== null) {
    return envValue
  }

  // 2. 然后尝试从 JSON 配置文件获取
  if (astro?.locals?.config && astro.locals.config[key] !== undefined) {
    return astro.locals.config[key]
  }

  // 3. 使用提供的默认值
  if (defaultValue !== null) {
    return defaultValue
  }

  // 4. 使用系统默认值
  return DEFAULT_CONFIG[key] || null
}

/**
 * 初始化配置系统
 * @param {object} env - Astro 环境变量对象
 * @param {object} astro - Astro 对象
 * @returns {object} 完整配置对象
 */
export async function initConfig(env, astro) {
  // 加载 JSON 配置文件
  const fileConfig = await loadConfigFromFile()

  // 合并所有配置源
  const config = {}

  for (const key of Object.keys(DEFAULT_CONFIG)) {
    config[key] = getConfig(env, { locals: { config: fileConfig } }, key, DEFAULT_CONFIG[key])
  }

  // 保存到 astro.locals 以便后续使用
  if (astro?.locals) {
    astro.locals.config = config
  }

  return config
}

/**
 * 验证必需的配置项
 * @param {object} config - 配置对象
 * @returns {Array} 缺失的配置项列表
 */
export function validateConfig(config) {
  const required = ['CHANNEL']
  const missing = []

  for (const key of required) {
    if (!config[key] || config[key].trim() === '') {
      missing.push(key)
    }
  }

  return missing
}

/**
 * 获取格式化的配置用于显示
 * @param {object} config - 配置对象
 * @returns {object} 格式化的配置
 */
export function getDisplayConfig(config) {
  const display = { ...config }

  // 隐藏敏感信息
  const sensitiveKeys = ['SENTRY_DSN', 'SENTRY_AUTH_TOKEN']
  for (const key of sensitiveKeys) {
    if (display[key]) {
      display[key] = '***HIDDEN***'
    }
  }

  return display
}

export default {
  getConfig,
  initConfig,
  validateConfig,
  getDisplayConfig,
  DEFAULT_CONFIG,
}

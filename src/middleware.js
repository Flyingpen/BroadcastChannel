import { getConfig, initConfig } from './lib/config.js'

export async function onRequest(context, next) {
  // 初始化配置系统
  await initConfig(import.meta.env, context)

  // 设置基础 URL 信息
  context.locals.SITE_URL = `${import.meta.env.SITE ?? ''}${import.meta.env.BASE_URL}`
  context.locals.RSS_URL = `${context.locals.SITE_URL}rss.xml`
  context.locals.RSS_PREFIX = ''

  // 处理标签搜索的 RSS 链接
  if (context.url.pathname.startsWith('/search') && context.params.q?.startsWith('#')) {
    const tag = context.params.q.replace('#', '')
    context.locals.RSS_URL = `${context.locals.SITE_URL}rss.xml?tag=${tag}`
    context.locals.RSS_PREFIX = `${tag} | `
  }

  const response = await next()

  if (!response.bodyUsed) {
    if (response.headers.get('Content-type') === 'text/html') {
      response.headers.set('Speculation-Rules', '"/rules/prefetch.json"')
    }

    // 使用配置的缓存时间
    const cacheTTL = getConfig(import.meta.env, context, 'CACHE_TTL', 300)
    if (!response.headers.has('Cache-Control')) {
      response.headers.set('Cache-Control', `public, max-age=${cacheTTL}, s-maxage=${cacheTTL}`)
    }
  }
  return response
};

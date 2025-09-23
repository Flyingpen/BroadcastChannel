import { cp, mkdir, rm } from 'node:fs/promises'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import cloudflare from '@astrojs/cloudflare'
import netlify from '@astrojs/netlify'
import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import sentry from '@sentry/astro'
import { defineConfig } from 'astro/config'
import { provider } from 'std-env'

const projectRoot = new URL('.', import.meta.url)
const edgeOneOutDir = new URL('./dist/edgeone/', projectRoot)

const providers = {
  vercel: vercel({
    isr: false,
    edgeMiddleware: false,
  }),
  cloudflare_pages: cloudflare(),
  netlify: netlify({
    cacheOnDemandPages: false,
    edgeMiddleware: false,
  }),
  node: node({
    mode: 'standalone',
  }),
}

const adapterEnv = process.env.SERVER_ADAPTER ?? process.env.server_adapter
const adapterProvider = adapterEnv || provider
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const staticProviders = new Set(['edgeone'])
const isEdgeOne = adapterProvider === 'edgeone'
const isStaticDeployment = isGitHubPages || staticProviders.has(adapterProvider)
const edgeOneStaticRoutes = ['/']
const selectedAdapter = isStaticDeployment ? undefined : providers[adapterProvider] || providers.node
const edgeOneExcludeRoutes = ['src/pages/after/[cursor].astro', 'src/pages/before/[cursor].astro', 'src/pages/posts/[id].astro', 'src/pages/search/[q].astro', 'src/pages/sitemap/[cursor].xml.js', 'src/pages/static/[...url].js']
const edgeOneOutDirPath = fileURLToPath(edgeOneOutDir)
const edgeOneTempDir = fileURLToPath(new URL('./.edgeone-temp/', projectRoot))

const edgeOneStaticOutputIntegration = {
  name: 'edgeone-static-outdir',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      if (!isEdgeOne) {
        return
      }

      try {
        const sourcePath = fileURLToPath(dir)
        await rm(edgeOneTempDir, { recursive: true, force: true })
        await cp(sourcePath, edgeOneTempDir, { recursive: true, force: true })
        await rm(edgeOneOutDirPath, { recursive: true, force: true })
        await mkdir(edgeOneOutDirPath, { recursive: true })
        await cp(edgeOneTempDir, edgeOneOutDirPath, { recursive: true, force: true })
        await rm(edgeOneTempDir, { recursive: true, force: true })
        logger?.info?.('[edgeone] Prepared static build output in dist/edgeone')
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        const messageText = `[edgeone] Failed to prepare static output: ${message}`
        logger?.error?.(messageText)
        throw error
      }
    },
  },
}

// https://astro.build/config
export default defineConfig({
  output: isStaticDeployment ? 'static' : 'server',
  adapter: selectedAdapter,
  ...(isEdgeOne
    ? {
        build: {
          assets: '_edgeone',
          outDir: 'dist/edgeone',
          exclude: edgeOneExcludeRoutes,
        },
        prerender: {
          default: false,
          routes: edgeOneStaticRoutes,
        },
      }
    : {}),
  integrations: [
    tailwind({
      css: ['src/styles/global.css'],
    }),
    ...(isEdgeOne ? [edgeOneStaticOutputIntegration] : []),
    ...(process.env.SENTRY_DSN
      ? [
          sentry({
            enabled: {
              client: false,
              server: process.env.SENTRY_DSN,
            },
            dsn: process.env.SENTRY_DSN,
            sourceMapsUploadOptions: {
              enabled: process.env.SENTRY_PROJECT && process.env.SENTRY_AUTH_TOKEN,
              project: process.env.SENTRY_PROJECT,
              authToken: process.env.SENTRY_AUTH_TOKEN,
            },
          }),
        ]
      : []),
  ],
  vite: {
    ssr: {
      noExternal: process.env.DOCKER ? !!process.env.DOCKER : undefined,
      external: [
        ...(adapterProvider === 'cloudflare_pages'
          ? [
              'module',
              'url',
              'events',
              'worker_threads',
              'async_hooks',
              'util',
              'node:diagnostics_channel',
              'node:net',
              'node:tls',
              'node:worker_threads',
              'node:util',
              'node:fs',
              'node:path',
              'node:process',
              'node:buffer',
              'node:string_decoder',
              'node:readline',
              'node:events',
              'node:stream',
              'node:assert',
              'node:os',
              'node:crypto',
              'node:zlib',
              'node:http',
              'node:https',
              'node:url',
              'node:querystring',
              'node:child_process',
              'node:inspector',
            ]
          : []),
      ],
    },
  },
})

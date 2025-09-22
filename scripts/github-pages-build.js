#!/usr/bin/env node

import { exec } from 'node:child_process'
import { existsSync, rename } from 'node:fs'
import process from 'node:process'
import { promisify } from 'node:util'

const execAsync = promisify(exec)
const renameAsync = promisify(rename)

// Dynamic routes that need to be disabled for static build
const dynamicRoutes = [
  'src/pages/after/[cursor].astro',
  'src/pages/before/[cursor].astro',
  'src/pages/posts/[id].astro',
  'src/pages/search/[q].astro',
  'src/pages/sitemap/[cursor].xml.js',
  'src/pages/static/[...url].js',
]

async function disableDynamicRoutes() {
  console.info('Disabling dynamic routes for static build...')
  for (const route of dynamicRoutes) {
    if (existsSync(route)) {
      await renameAsync(route, `${route}.disabled`)
      console.info(`Disabled: ${route}`)
    }
  }
}

async function enableDynamicRoutes() {
  console.info('Re-enabling dynamic routes...')
  for (const route of dynamicRoutes) {
    if (existsSync(`${route}.disabled`)) {
      await renameAsync(`${route}.disabled`, route)
      console.info(`Enabled: ${route}`)
    }
  }
}

async function build() {
  try {
    await disableDynamicRoutes()

    console.info('Building static site...')

    // Parse command line arguments for site and base
    const args = process.argv.slice(2)
    const siteArg = args.find(arg => arg.startsWith('--site='))
    const baseArg = args.find(arg => arg.startsWith('--base='))

    let buildCommand = 'pnpm astro build'
    if (siteArg)
      buildCommand += ` --site "${siteArg.split('=')[1]}"`
    if (baseArg)
      buildCommand += ` --base "${baseArg.split('=')[1]}"`

    await execAsync(buildCommand)

    console.info('✅ GitHub Pages build successful!')
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  } finally {
    await enableDynamicRoutes()
  }
}

build()

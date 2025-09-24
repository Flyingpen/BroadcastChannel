#!/usr/bin/env node

import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { env, exit } from 'node:process'

console.info('🔧 GitHub Pages 构建优化脚本')

const distDir = 'dist'
const isGitHubPages = env.GITHUB_PAGES === 'true'

if (!isGitHubPages) {
  console.info('ℹ️ 非 GitHub Pages 环境，跳过优化')
  exit(0)
}

try {
  // 确保输出目录存在
  if (!existsSync(distDir)) {
    await mkdir(distDir, { recursive: true })
  }

  // 创建 .nojekyll 文件（防止 Jekyll 处理）
  await writeFile(join(distDir, '.nojekyll'), '')
  console.info('✅ 创建 .nojekyll 文件')

  // 添加刷新间隔提示到构建输出
  console.info('✅ GitHub Pages 静态部署优化完成')
  console.info('')
  console.info('📋 静态部署说明：')
  console.info('   • 内容将通过客户端自动检查更新')
  console.info('   • 默认每5分钟检查一次新内容')
  console.info('   • 可通过 REFRESH_INTERVAL 环境变量调整间隔')
  console.info('   • 页面右上角有手动刷新按钮')
  console.info('')
}
catch (error) {
  console.error('❌ 构建优化失败:', error.message)
  exit(1)
}

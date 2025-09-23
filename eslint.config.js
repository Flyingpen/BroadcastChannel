import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  ignores: ['src/styles/global.css', 'src/env.d.ts'],
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'style/brace-style': 'off', // 禁用大括号风格检查，避免�?Astro 组件冲突
  },
})

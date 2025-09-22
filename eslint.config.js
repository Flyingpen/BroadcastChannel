import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  ignores: ['src/assets/style.css', 'src/env.d.ts'],
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'style/brace-style': 'off', // 禁用大括号风格检查，避免与 Astro 组件冲突
  },
})

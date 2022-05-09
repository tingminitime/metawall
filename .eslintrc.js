/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    // "eslint:recommended",
    "plugin:tailwindcss/recommended",
  ],
  env: {
    browser: true,
    node: true,
    // "vue/setup-compiler-macros": true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ["tailwindcss"],
  rules: {
    // --- vue eslint 規則設定(Option) ---
    'vue/no-unused-vars': 'error',
    'vue/script-setup-uses-vars': 'off',
    'vue/multi-word-component-names': 'warn',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'never',
        },
        svg: 'never',
        math: 'never',
      },
    ],
    // --- 自動排序套件新增規則 ---
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        'whitelist': [
          'form\\-(input|textarea|select|multiselect|checkbox|radio)',
          'material-icons',
          'material-icons-outlined',
          'material-symbols-outlined',
          'text\\-my(.*)',
          'bg\\-my(.*)',
          'border\\-(.*)?my(.*)',
          'ring\\-my(.*)',
          'aspect\\-(.*)',
          'line-clamp\\-[1-9]',
          'load',
          'cover',
        ],
      }
    ],
    'tailwindcss/no-contradicting-classname': 'error',
  }
}

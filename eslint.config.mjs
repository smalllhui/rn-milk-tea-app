import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    ignores: ['src/assets/*'], // 忽略文件及文件夹
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // 全局规则
  {
    settings: {
      react: {
        pragma: 'React',
        version: 'detect'
      }
    },
    rules: {
      /*
       * "off" 或 0    ==>  关闭规则
       * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
       * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
       */
      // js 详细规则：http://eslint.cn/docs/rules/
      /** @js */
      quotes: [2, 'single'], // 强制使用一致的单引号
      semi: [2, 'never'], // 强制是否使用分号 always/never
      'no-undef': 'off',  // 不能有未定义的变量
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-debugger': 'off', // 是否允许使用debugger
      'no-console': 'off', //  是否允许使用console

      // ts 详细规则：https://typescript-eslint.io/rules/
      /** @typescript */
      '@typescript-eslint/no-unused-vars': 'warn', // 定义变量没有使用
      '@typescript-eslint/no-explicit-any': 'off', //不能使用any
      '@typescript-eslint/no-unused-expressions': 'off',

      /** @react */
      'react-refresh/only-export-components': 'off',
      'react/react-in-jsx-scope': 'off', // 关闭必须导入react
    },
  },
]

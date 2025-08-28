import js from '@eslint/js'
import ts from 'typescript-eslint'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-config-prettier'

export default [
  { ignores: ['**/dist/**','**/build/**','**/node_modules/**'] },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: { react, 'react-hooks': hooks },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/jsx-uses-react':'off',
      'react/react-in-jsx-scope':'off',
      'react-hooks/rules-of-hooks':'error',
      'react-hooks/exhaustive-deps':'warn'
    }
  },
  prettier
]

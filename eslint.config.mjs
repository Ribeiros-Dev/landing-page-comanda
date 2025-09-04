import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier
    },
    rules: {
      ...js.configs.recommended.rules,

      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'prettier/prettier': 'error',

      'react/react-in-jsx-scope': 'off', // Next.js não precisa importar React
      'react/prop-types': 'off', // Se usando TypeScript
      'react/display-name': 'warn',
      'react/no-unescaped-entities': 'warn',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'no-console': ['warn', {allow: ['warn', 'error']}],
      'prefer-const': 'warn',
      'no-var': 'error',

      semi: ['error', 'always'],
      quotes: ['error', 'single', {avoidEscape: true}]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['*.config.{js,mjs}', 'scripts/**/*.{js,mjs}'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-console': 'off'
    }
  }
];

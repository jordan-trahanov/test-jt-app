module.exports = {
  globals: {
    module: 'readonly',
  },
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'react-dom': {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['dist', '.eslintrc', 'node_modules', 'src/@types'],
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'react-refresh',
    'import',
    'unused-imports',
    '@emotion',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    // ESLint: Possible Errors
    'no-console': 'off',
    'no-unreachable': 'warn',
    'no-extra-parens': ['error', 'functions'],
    'no-prototype-builtins': 'off',
    'no-template-curly-in-string': 'error',

    // ESLint: COMMON: Best Practices
    'array-callback-return': 'warn',
    'block-scoped-var': 'warn',
    'consistent-return': 'off',
    'no-constant-condition': 'off',
    'no-multi-spaces': 'warn',
    'no-param-reassign': 'warn',
    'no-redeclare': 'warn',
    'no-script-url': 'off',
    'no-useless-return': 'warn',
    'require-await': 'warn',
    semi: ['warn', 'always'],

    // ESLint: Variables
    'no-undef': 'error',
    'no-unused-vars': 'off',

    // ESLint: Node.js and CommonJS
    'callback-return': 'warn',

    // ESLint: ECMAScript 6
    'arrow-body-style': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': 'warn',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'error',
    'no-duplicate-imports': 'warn',
    'no-fallthrough': 'off',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'prefer-template': 'warn',

    // ESLint: Sorting
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // Prettier
    'prettier/prettier': 'warn',

    // React
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: false,
        assignment: false,
      },
    ],
    'react/button-has-type': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',

    // Import
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@(react|react-dom|react-router-dom)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'warn',
    'import/no-named-as-default': 'off',

    // Unused Imports
    'unused-imports/no-unused-imports': 'warn',

    // Emotion
    '@emotion/syntax-preference': ['error', 'object'],
  },
};

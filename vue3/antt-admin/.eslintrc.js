module.exports = {
  root: true,
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': {
      skipBlankLines: true,
      ignoreComments: true
    },
    'indent': ['off', 'tab'],
    // '@typescript-eslint/no-unused-vars': [
    //   'off',
    //   {
    //     argsIgnorePattern: '^_',
    //     varsIgnorePattern: '^_'
    //   }
    // ],
    // 'no-unused-vars': [
    //   'off',
    //   {
    //     argsIgnorePattern: '^_',
    //     varsIgnorePattern: '^_'
    //   }
    // ],
    // // "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  }
};

module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    parser: require.resolve("@typescript-eslint/parser"),
    extraFileExtensions: [".vue"],
  },

  extends: [
    // Base ESLint recommended rules
    // "eslint:recommended",
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    "plugin:@typescript-eslint/recommended",

    // https://eslint.vuejs.org/rules/#available-rules
    // "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
    "plugin:vue/vue3-strongly-recommended", // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    "@vue/typescript/recommended",

    "airbnb-base",
    // https://github.com/iamturns/eslint-config-airbnb-typescript
    "airbnb-typescript/base",

    // https://github.com/prettier/eslint-config-prettier#readme
    "prettier",
  ],

  plugins: [
    "@typescript-eslint",
    "vue", // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    "vue-i18n", // https://eslint-plugin-vue-i18n.intlify.dev/intro.html
    "import", // https://github.com/import-js/eslint-plugin-import
  ],

  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g., "@typescript-eslint/explicit-function-return-type": "off",

    // Vue specific rules
    "vue/no-unused-vars": "error",

    // TypeScript specific rules
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    // Prettier plugin not required as we're using eslint-config-prettier to disable conflicting rules
    // Custom rules or overrides can go here
  },
};

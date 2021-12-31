module.exports = {
  // 검사 환경
  env: {
    browser: true, // 브라우저 환경
    node: true // nodejs 환경
  },

  // 코드 규칙
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', //Lv1
    'plugin:vue/vue3-strongly-recommended', //Lv2
    // 'plugin:vue/vue3-recommended', //Lv3
    // js
    'eslint:recommended'
  ],

  // 분석기
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 사용자 정의 규칙
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  },
};
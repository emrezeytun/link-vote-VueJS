module.exports = {
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'vue',
      'ts',
      'tsx'
    ],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
      "\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    snapshotSerializers: [
      'jest-serializer-vue'
    ],
    testMatch: [
        "**/test/**/Modal.spec.{j,t}s?(x)",
        "**/test/**/Notification.spec.{j,t}s?(x)",
        "**/test/**/Pagination.spec.{j,t}s?(x)",
        "**/test/**/Add.spec.{j,t}s?(x)",
    ],
    testURL: 'http://localhost/',
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ],
    globals: {
      'js-jest': {
        babelConfig: true
      }
    }
  }

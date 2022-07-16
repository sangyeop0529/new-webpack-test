npm init -y
npm i -D webpack webpack-cli webpack-dev-server@next

"scripts": {
  "dev" : "webpack-dev-server --mode development",
  "build" : "webpack --mode production"
}

webpack.config.js 파일 생성

const path = require('path')

module.exports = {
  entry: './js/main.js',
  output: {
    clean: true
  }
}

static 폴더 생성

npm i -D copy-webpack-plugin
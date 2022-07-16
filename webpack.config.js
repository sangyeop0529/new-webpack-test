// common js
// module path, plugin
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // 시작점 : js
  entry: './js/main.js',
  // 결과물 패스 설정
  output: {
    // default 값으로 생성됨
    /*path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',*/
    // 경로를 바꾸면 생기는 더미를 지움
    clean: true
  },
  // 필요한 모듈 설정
  module: {
    rules: [
      { 
        test:/\.s?css$/i,
        use: [
          // 순서가 중요!!! (작은범위부터)
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  // 다양한 플러그인 설치
  plugins: [
    new HtmlWebpackPlugin(
      {template: './index.html'}
    ),
    new CopyPlugin(
      {patterns: [ 
        { from: "static"},
      ]}
    )
  ],
  // 로컬 호스트 설정
  /*devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  }*/
}
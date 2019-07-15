const path = require('path');

module.exports = {
  name: 'word-reply-setting', // 불필요
  mode: 'development', // 실서비스 : production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // entry : 입력, output : 출력. enrty와 output이 가장중요하다.
  entry: {
    app: ['./client'],
  },
  output: {
    path: path.join(__dirname, 'dist'), // path.join하면 경로를 합쳐준다. __dirname현재 폴더경
    filename: "app.js"
  }
}


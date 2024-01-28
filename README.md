# CRA 없이 프론트엔드 세팅하기
## babel-webpack-react 설정

-참고 페이지<br>
https://velog.io/@chloedev/webpack-CRA%EC%97%86%EC%9D%B4-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0

-참고 페이지에서 내가 수정한 부분<br>
10. webpck.config.ts 설정하기<br>
```
import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  mode: "development",
  entry: "./src/index.tsx", // src/index.js or src/index.ts가 기본값
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js", // main.js가 기본값
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader", "ts-loader"],
        exclude: ["/node_modules"],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
          },
          { loader: "css-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  }, // test dev 서버 설정하기
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
```
``Module not found: Error: Can't resolve './pages/Home' in '/Users/kwon-ohhyun/Desktop/none-cra-setting/babel-webpack-react/src``<br>
resolve 부분을 추가하지 않으면 위 에러가 발생

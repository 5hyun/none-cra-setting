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

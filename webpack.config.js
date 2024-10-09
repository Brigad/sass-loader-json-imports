const path = require("path");

const SassJSONImporter = require("./sass-json-importer");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
                exportLocalsConvention: "as-is",
                localIdentName: "[name]_[local]",
              },
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                loadPaths: [path.resolve(__dirname, "./src")],
                importer: SassJSONImporter({
                  includePaths: path.resolve(__dirname, "./src"),
                }),
              },
            },
          },
        ],
      },
    ],
  },
};

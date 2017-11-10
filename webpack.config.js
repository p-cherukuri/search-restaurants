const ExtractTextPlugin = require("extract-text-webpack-plugin");

let getDevTool = () => {
  if (process.env.NODE_ENV !== "production") {
    return "source-map"; //enable source map
  }

  return false;
};

module.exports = {
  entry: {
    main: "./src/js/main.js"
  },
  output: {
    filename: "./dist/js/[name].js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("dist/styles/main.css", {
      allChunks: true
    })
  ]
};

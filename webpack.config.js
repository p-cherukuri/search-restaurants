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
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader"
      }
    ]
  }
};

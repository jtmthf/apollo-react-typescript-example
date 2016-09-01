var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

module.exports =  function(options) {
  var configuration = {
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
  };

  if (options.web) {
    configuration.module = {
      loaders: [
        {
          loader: "awesome-typescript-loader",
          test: /\.tsx?$/
        },
      ],
    };
    if (options.server) {
      configuration.entry = "./src/web/server.tsx";
      configuration.output = {
        filename: "server.js",
        path: "./build",
      };
      configuration.externals = [nodeExternals()];
      configuration.plugins = [
        new webpack.BannerPlugin({
          banner: "require('source-map-support').install();",
          entryOnly: false,
          raw: true,
        }),
        new webpack.DefinePlugin({
          "process.env": {
            "NODE_ENV": JSON.stringify("development"),
          },
        }),
      ];
      configuration.target = "node";
      configuration.node = {
        Buffer: false,
        __dirname: false,
        __filename: false,
        console: false,
        global: false,
        process: false,
        setImmediate: false,
      };
      configuration.devtool = "sourcemap";
    }
  }

  return configuration;
};

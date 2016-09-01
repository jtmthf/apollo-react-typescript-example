declare module "webpack-node-externals" {
  import * as webpack from "webpack";

  function nodeExternals(): webpack.ExternalsElement
  namespace nodeExternals {}
  export = nodeExternals
}

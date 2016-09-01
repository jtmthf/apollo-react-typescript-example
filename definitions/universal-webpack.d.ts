declare module "universal-webpack" {
  import * as webpack from "webpack";

  interface UniversalWebpackSettings {
    server: {
      input: string;
      output: string;
    }
  }

  interface ClientOptions {
    development?: boolean;
    css_bundle?: boolean;
  }

  export function client_configuration(configuration: webpack.Configuration, settings: UniversalWebpackSettings, options?: ClientOptions): webpack.Configuration
  export function server_configuration(configuration: webpack.Configuration, settings: UniversalWebpackSettings): webpack.Configuration
  export function server(configuration: webpack.Configuration, settings: UniversalWebpackSettings): void
}
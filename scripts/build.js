import builder from "statinamic/lib/builder"
import store from "../web_modules/app/store"

const exports = {
  layouts: require.resolve("../web_modules/layouts"),
  metadata: require.resolve("../web_modules/app/metadata"),
  routes: require.resolve("../web_modules/app/routes"),
}

import config from "./config.js"
import webpackConfig from "./webpack.config.babel.js"
import clientWebpackConfig from "./webpack.config.client.js"

builder({
  config,
  webpackConfig,
  clientWebpackConfig,

  exports,
  store,
})

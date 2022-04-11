/** @type {Options} */
const config = {
  devServer: {
    overlay: false
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/breadgood-admin/" : "",
  outputDir: "dist",
  transpileDependencies: ["vuetify"]
};
//productionSourceMap: false
module.exports = config;

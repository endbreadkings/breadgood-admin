/** @type {Options} */
const config = {
  devServer: {
    overlay: false
  },
  publicPath: "/breadgood-admin/",
  outputDir: "dist",
  transpileDependencies: ["vuetify"]
};
//productionSourceMap: false
module.exports = config;

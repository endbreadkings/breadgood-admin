/** @type {Options} */
const config = {
  devServer: {
    overlay: false
  },
  outputDir: "dist",
  transpileDependencies: ["vuetify"]
};
//productionSourceMap: false
module.exports = config;

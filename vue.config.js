/** @type {Options} */
const config = {
  devServer: {
    overlay: false
  },
  // publicPath:"",
  outputDir: "docs",
  transpileDependencies: ["vuetify"]
};
//productionSourceMap: false
module.exports = config;

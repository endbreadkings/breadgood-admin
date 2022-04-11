/** @type {Options} */
const config = {
  devServer: {
    overlay: false
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/endbreadkings.github.io/breadgood-admin/"
      : "",
  outputDir: "docs",
  transpileDependencies: ["vuetify"]
};
//productionSourceMap: false
module.exports = config;

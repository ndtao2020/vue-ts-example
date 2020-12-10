/* eslint-disable camelcase */
const isProd = process.env.NODE_ENV === "production";
// exports
module.exports = {
  filenameHashing: isProd,
  productionSourceMap: !isProd,
  css: {
    sourceMap: !isProd,
  },
  devServer: {
    host: "127.0.0.1",
    port: 3000,
    open: true,
    overlay: {
      error: true,
      warning: true,
    },
  },
};

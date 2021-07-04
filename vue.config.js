/* eslint-disable camelcase */
const isProd = process.env.NODE_ENV === "production";
// exports
module.exports = {
  filenameHashing: isProd,
  productionSourceMap: !isProd,
  css: {
    sourceMap: !isProd,
  },
};

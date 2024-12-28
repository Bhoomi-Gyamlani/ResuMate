const path = require('path');

module.exports = function override(config, env) {
  const sourceMapLoaderRule = config.module.rules.find(rule =>
    rule.use && rule.use.some(use => use.loader === 'source-map-loader')
  );

  if (sourceMapLoaderRule) {
    sourceMapLoaderRule.exclude = [
      path.resolve(__dirname, 'node_modules/html2pdf.js')
    ];
  }

  return config;
};

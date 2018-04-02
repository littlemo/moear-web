var build = 'build';
var node_modules = 'node_modules';

var src = 'source';
var srcAssets = 'source';

var development = '../server/server/pages/templates/pages';
var developmentAssets = '../server/server/pages/static/pages';

var production = development;
var productionAssets = developmentAssets;

module.exports = {
  browsersync: {
    development: {
      proxy: 'localhost:8888',
      port: 9999,
      browser: ["google chrome"],
      files: []
    },
    production: {
      proxy: 'localhost:8888',
      port: 9998,
      browser: ["google chrome"]
    }
  },
}

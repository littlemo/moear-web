var build = 'build';
var node_modules = 'node_modules';

var src = 'source';
var srcAssets = 'source';

var development = '../server/server/pages/templates/pages';
var developmentAssets = '../server/server/pages/static/pages';

var production = development;
var productionAssets = developmentAssets;

module.exports = {
  watch: {
    html: [
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}'
    ],
    styles: srcAssets + '/styles/**/*.css',
    scripts: srcAssets + '/js/**/*.js',
    images: srcAssets + '/images/**/*',
    sprites: srcAssets + '/images/**/*.png'
  },
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
  delete: {
    development: {
      src: [development, developmentAssets],
      options: {
        force: true,
      }
    },
    production: {
      src: [
        developmentAssets + '/css/app.css.map',

        developmentAssets + '/css/bootstrap.css',
        developmentAssets + '/css/bootstrap-theme.css',

        developmentAssets + '/js/bootstrap.js',
        developmentAssets + '/js/jquery.js',
        developmentAssets + '/js/vue.js',
      ],
      options: {
        force: true,
      }
    }
  },
  html: {
    development: {
      src: srcAssets + '/html/**/*.{html,htm}',
      dest: development
    },
    production: {
      src: srcAssets + '/html/**/*.{html,htm}',
      dest: production,
      renameOptions: {},
      replace: {
        // bootstrap
        '/static/pages/css/bootstrap.css':
          '//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css',
        '/static/pages/css/bootstrap-theme.css':
          '//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
        '/static/pages/js/bootstrap.js':
          '//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js',

        // vue
        '/static/pages/js/vue.js':
          '//cdn.bootcss.com/vue/2.5.13/vue.min.js',

        // Others
        '/static/pages/js/jquery.js':
          '//cdn.bootcss.com/jquery/3.2.1/jquery.min.js',
      }
    }
  },
  relyonJS: {
    src: [
      srcAssets + '/static/js/*.js',
    ],
    dest: developmentAssets + '/js'
  },
}

var build = 'build';
var node_modules = 'node_modules';

var src = 'source';
var srcAssets = 'source';

var development = '../server/server/templates';
var developmentAssets = '../server/server/pages/static';

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

        developmentAssets + '/js/bootstrap.bundle.js',
        developmentAssets + '/js/jquery.cookie.js',
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
        '/static/css/bootstrap.css':
          'https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css',
        '/static/js/bootstrap.bundle.js':
          'https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js',

        // vue
        '/static/js/vue.js':
          'https://cdn.bootcss.com/vue/2.5.16/vue.min.js',

        // Others
        '/static/js/jquery.js':
          'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js',
        '/static/js/jquery.cookie.js':
          'https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js',
      }
    }
  },
  styles: {
    src: srcAssets + '/styles/*.css',
    dest: developmentAssets + '/css',
    options: {
      autoprefixer: {
        browsers: [
          'last 2 versions',
          'safari 5',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4',
        ],
        cascade: true
      },
      mqpacker: {},
      cssnano: {}
    }
  },
  stylesLint: {
    src: [
      srcAssets + '/styles/**/*.css',
      '!' + srcAssets + '/styles/partials/_sprites.css'
    ],
    options: {
      stylelint: {
        'rules': {
          'string-quotes': 'double',
          'color-hex-case': 'lower',
          'color-no-invalid-hex': true,
          'declaration-colon-space-after': 'always',
          'max-empty-lines': 2,
          'rule-empty-line-before': [ 'always', {
            'except': ['first-nested'],
            'ignore': ['after-comment']
          } ],
          'value-no-vendor-prefix': true,
        }
      },
      reporter: {
        clearMessages: true
      }
    }
  },
  scripts: {
    src: srcAssets + '/js/**/*.js',
    dest: developmentAssets + '/js',
  },
  jshint: {
    src: srcAssets + '/js/**/*.js',
  },
  relyonJS: {
    src: [
      srcAssets + '/static/js/*.js',
    ],
    dest: developmentAssets + '/js'
  },
  images: {
    src: srcAssets + '/static/images/**/*',
    dest: developmentAssets + '/img'
  },
  nodeModules: {
    development: {
      css: {
        src: [
          node_modules + '/bootstrap/dist/css/bootstrap.css',
        ],
        dest: developmentAssets + '/css',
      },
      js: {
        src: [
          node_modules + '/jquery/dist/jquery.js',
          node_modules + '/jquery.cookie/jquery.cookie.js',
          node_modules + '/bootstrap/dist/js/bootstrap.bundle.js',
          node_modules + '/vue/dist/vue.js',
        ],
        dest: developmentAssets + '/js',
      },
    }
  },
  optimize: {
    html: {
      src: production + '/**/*.{html,htm,php}',
      dest: production,
      options: {
        collapseWhitespace: true
      }
    },
    css: {
      src: productionAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {},
      replace: {}
    },
    js: {
      src: productionAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src: productionAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    },
  },
}

// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/es5-shim/es5-shim.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-fontawesome/dist/angular-fontawesome.js',
      'bower_components/intro.js/intro.js',
      'bower_components/angular-intro.js/src/angular-intro.js',
      'bower_components/leaflet/dist/leaflet-src.js',
      'bower_components/angular-leaflet-directive/dist/angular-leaflet-directive.js',
      'bower_components/angular-loading-bar/build/loading-bar.js',
      'bower_components/masonry/dist/masonry.pkgd.min.js',
      'bower_components/ev-emitter/ev-emitter.js',
      'bower_components/imagesloaded/imagesloaded.js',
      'bower_components/jquery-bridget/jquery-bridget.js',
      'bower_components/angular-masonry/angular-masonry.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/moment/moment.js',
      'bower_components/angular-momentjs/angular-momentjs.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
      'bower_components/angular-fullscreen/src/angular-fullscreen.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-ui-utils/ui-utils.js',
      'bower_components/ng-table/dist/ng-table.min.js',
      'bower_components/html.sortable/dist/html.sortable.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/jquery.slimscroll/jquery.slimscroll.js',
      'bower_components/json3/lib/json3.js',
      'bower_components/leaflet-draw/dist/leaflet.draw.js',
      'bower_components/leaflet-plugins/control/Distance.js',
      'bower_components/leaflet-plugins/control/Layers.Load.js',
      'bower_components/leaflet-plugins/control/Permalink.js',
      'bower_components/leaflet-plugins/control/Permalink.Layer.js',
      'bower_components/leaflet-plugins/control/Permalink.Line.js',
      'bower_components/leaflet-plugins/control/Permalink.Marker.js',
      'bower_components/leaflet-plugins/control/Permalink.Overlay.js',
      'bower_components/leaflet-plugins/layer/Icon.Canvas.js',
      'bower_components/leaflet-plugins/layer/Layer.Deferred.js',
      'bower_components/leaflet-plugins/layer/Marker.Rotate.js',
      'bower_components/leaflet-plugins/layer/Marker.Text.js',
      'bower_components/leaflet-plugins/layer/OpenStreetBugs.js',
      'bower_components/leaflet-plugins/layer/vector/GPX.js',
      'bower_components/leaflet-plugins/layer/vector/GPX.Speed.js',
      'bower_components/leaflet-plugins/layer/vector/KML.js',
      'bower_components/leaflet-plugins/layer/vector/OSM.js',
      'bower_components/leaflet-plugins/layer/tile/Bing.js',
      'bower_components/leaflet-plugins/layer/tile/Google.js',
      'bower_components/leaflet-plugins/layer/tile/Yandex.js',
      'bower_components/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.js',
      'bower_components/lodash/lodash.js',
      'bower_components/restangular/dist/restangular.js',
      'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
      'bower_components/angular-simple-logger/dist/angular-simple-logger.js',
      'bower_components/angular-google-maps/dist/angular-google-maps.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-scenario/angular-scenario.js',
      // endbower
      'node_modules/socket.io-client/socket.io.js',
      '.tmp/app/app.js',
      '.tmp/{app,components}/**/*.module.js',
      '.tmp/{app,components}/**/*.js',
      '.tmp/test/**/*.js',
      'client/{app,components}/**/*.html'
    ],

    preprocessors: {
      '**/*.html': 'ng-html2js',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // reporter types:
    // - dots
    // - progress (default)
    // - spec (karma-spec-reporter)
    // - junit
    // - growl
    // - coverage
    reporters: ['spec'],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};

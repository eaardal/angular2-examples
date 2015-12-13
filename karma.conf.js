module.exports = function(config) {
    config.set({
        basePath: 'src',
        frameworks: ['jasmine'],
        files: [
            // Thirdparty dependencies
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/angular2/bundles/angular2.dev.js',

            // Application JS files
            'dist/**/*.js',
            '!dist/**/*.spec.js',

            // Test files
            'dist/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        //autoWatch: true,
        browsers: ['PhantomJS'],
        //singleRun: true
    });
};

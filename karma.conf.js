module.exports = function(config) {

    // Karma is currently not set up and will not work. Run tests with unit-tests.html
    config.set({
        basePath: 'src',
        frameworks: ['jasmine'],
        files: [],
        exclude: [],
        preprocessors: {},
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};

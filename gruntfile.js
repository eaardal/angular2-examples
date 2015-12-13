module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            compile: {
                files: 'src/app/**/*.ts',
                tasks: ['tslint', 'exec:compileTypeScript'],
                options: {
                    events: ['added', 'deleted', 'changed']
                }
            }
        },
        exec: {
            liveServer: 'live-server --open=src',
            liveServerTest: 'live-server --open=src/unit-tests.html',
            compileTypeScript: 'tsc',
            watchTypeScript: 'tsc -w'
        },
        concurrent: {
            compile: {
                tasks: ['exec:watchTypeScript', 'watch:includeSource']
            },
            liveReload: {
                tasks: ['exec:liveServer'],
                options: {
                    logConcurrentOutput: true
                }
            },
            all: {
                tasks: ['exec:watchTypeScript', 'exec:liveServer']
            }
        },
        tslint: {
            options: {
                configuration: 'tslint.json'
            },
            files: {
                src: 'src/app/**/*.ts'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-karma');

    var strict = grunt.option('strict') || false;
    var watch = grunt.option('watch') || false;

    grunt.registerTask('compile', 'Compiles everything. Add --strict to also include tslint', function(){
        if (strict === true){
            grunt.task.run(['tslint', 'exec:compileTypeScript']);
        } else {
            grunt.task.run(['exec:compileTypeScript']);
        }
    });

    grunt.registerTask('default', 'The default task. Compiles and starts live-server', function(){
        if (watch === true){
            grunt.task.run(['tslint', 'exec:compileTypeScript', 'concurrent:all']);
        } else {
            grunt.task.run(['tslint', 'exec:compileTypeScript']);
        }
    });

    grunt.registerTask('test', 'Starts Jasmine in the browser', function(){
        if (watch === true){
            grunt.task.run(['exec:compileTypeScript', 'exec:liveServerTest']);
        } else {
            grunt.task.run(['exec:compileTypeScript', 'exec:liveServerTest']);
        }
    });
};

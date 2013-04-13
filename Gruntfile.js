/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        generate : {
            platform : {
                file : 'src/<%= pkg.name %>.js',
                content : '/*global platform:true*/platform = (function(){ return { version: "<%= pkg.version %>" }; })();'
            }
        },
        jasmine: {
            src: ['src/**/*.js'],
            options: {
                specs: 'spec/**/*_spec.js'
            }
        },
	karma: {
	    unit: {
		configFile: 'karma.conf.js'
	    }
	},
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['src/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            source: {
                src: ['src/**/*.js']
            },
            spec: {
                src: ['spec/**/*.js']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            tdd: {
                files: ['<%= jshint.source.src %>', '<%= jshint.spec.src %>'],
                tasks: ['jasmine']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerMultiTask('generate', function(){
        grunt.file.write(this.data.file, this.data.content);
    });

    // Default task.
    grunt.registerTask('default', ['generate', 'jshint', 'jasmine', 'concat', 'uglify']);

};

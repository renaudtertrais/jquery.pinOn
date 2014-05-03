module.exports = function(grunt){
	grunt.initConfig({	
		uglify: {
			dist: {
				files: {
					'jquery.pinOn.min.js': ['jquery.pinOn.js']
				}
			}
		},
		watch: {
			livereload: {
				files: ['gh-pages/**'],
				options: {
					spawn: false,
					livereload: true
				},
			},
			dist_js: {
				files: ['jquery.pinOn.js'],
				tasks: ['dist-js'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		}
	});

	// * * * Custom tasks * * *
	// dist-js
	grunt.task.registerTask("dist-js", ["uglify:dist"]);

	// * * * Grunt Plugins * * *
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}
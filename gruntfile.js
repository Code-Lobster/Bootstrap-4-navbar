module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
                options: {
                    style: 'compressed ',
                },
				files: {
					'css/bootstrap-grid.min.css' : 'scss/bootstrap-nav.scss'
				}
			},
            dev: {
                options: {
                    style: 'expanded',
                },
				files: {
					'css/bootstrap-grid.css' : 'scss/bootstrap-nav.scss'
				}
			}
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.registerTask('default',['sass','watch']);
    grunt.registerTask('default',['sass']);
}   
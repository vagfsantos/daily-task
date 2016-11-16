module.exports = function(grunt) {

	grunt.initConfig({

		clean: {
			build:{
				src: 'www/'
			}
		},

		copy: {
			html:{
				expand: true,
				cwd: 'dev',
				src: '*.html',
				dest: 'www/'
			},

			fonts:{
				expand: true,
				cwd: 'dev',
				src: 'fonts/**',
				dest: 'www/'
			}
		},

		sass: {
			dist: {
		      files: [{
		        	expand: true,
		        	cwd: 'dev/scss/',
		        	src: ['**/*.scss'],
		        	dest: 'www/css/',
		        	ext: '.min.css'
		      	}]
		    }
		},

		uglify: {
			my_target: {
		      	files: [{
		          	expand: true,
		          	cwd: 'dev/js/',
		          	src: '**/*.js',
		          	dest: 'www/js/',
		          	ext: '.min.js'
		      	}]
		    }
		},

		cssmin:{
			target: {
			    files: [{
			      	expand: true,
			      	cwd: 'www/css',
			      	src: ['**/*.css'],
			      	dest: 'www/css',
			      	ext: '.min.css'
			    }]
			}
		},

		watch: {
			scripts: {
			    files: 'dev/js/**/*.js',
			    tasks: ['uglify'],
			    options: {
			      	event: ['added', 'deleted', 'changed'],
			    }
			},

			css: {
			    files: 'dev/scss/**/*.scss',
			    tasks: ['sass', 'cssmin'],
			    options: {
			      	event: ['added', 'deleted', 'changed'],
			    }
			},

			html: {
			    files: 'dev/*.html',
			    tasks: ['copy:html'],
			    options: {
			      	event: ['added', 'deleted', 'changed'],
			    }
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['clean', 'copy', 'sass', 'cssmin', 'uglify', 'watch']);
}
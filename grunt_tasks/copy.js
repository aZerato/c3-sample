module.exports = copy = {
	ressources: {
		files: [
			{src: 'bower_components/d3/d3.min.js', dest: '<%= config.lib %>/d3/d3.js'},

			{src: 'bower_components/c3/c3.min.js', dest: '<%= config.lib %>/c3/c3.js'},
			{src: 'bower_components/c3/c3.css', dest: '<%= config.lib %>/c3/c3.css'},

			{src: 'bower_components/jquery/dist/jquery.min.js', dest: '<%= config.lib %>/jquery/jquery.js'},
		]
	}
};
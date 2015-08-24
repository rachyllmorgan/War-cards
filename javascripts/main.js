requirejs.config({
  baseUrl: './javascripts',
  paths: {
    	'jquery': '../bower_components/jquery/dist/jquery.min',
	'firebase': '../bower_components/firebase/firebase',
	'lodash': '../bower_components/lodash/lodash',
    	'hbs': '../bower_components/require-handlebars-plugin/hbs',
    	'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    	'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
		'firebase': {
			exports: 'Firebase'
		}
	}
});

requirejs(["dependencies", "firebase"],
	function (dependencies, firebase) {
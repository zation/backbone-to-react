/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

(function () {
	'use strict';

	var render = function() {
		React.render(React.createElement(app.App, {
			todos: app.todos
		}), document.getElementById('app-container'));
	};

	app.todos.on('all', render);
	app.todos.fetch();
})();

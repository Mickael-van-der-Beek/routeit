var pathToRegexp = require('path-to-regexp');

module.exports = (function () {
	'use strict';

	function ExpressRouter () {
		this.nodes = [];
	}

	ExpressRouter.prototype.get = function (pathcomps) {
		var match = false;
		var node = null;
		var len = this.nodes.length;

		while (len-- && match === false) {
			node = this.nodes[len];

			match = 'regexp' in node ?
				node.regexp.test(pathcomps) :
				node.path === pathcomps;
		}

		return node;
	};

	ExpressRouter.prototype.set = function (pathcomps, value) {
		var node = {
			values: [
				value
			]
		};

		if (pathcomps instanceof RegExp) {
			node.regexp = pathToRegexp(pathcomps, {
				sensitive: true,
				strict: true,
				end: true
			});
		}
		else {
			node.path = pathcomps;
		}

		this.nodes.push(node);
	};

	return ExpressRouter;
})();

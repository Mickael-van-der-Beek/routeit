var ExpressRouter = require('./fixtures/express-router');
var RouteIt = require('../src/router');

var crypto = require('crypto');

module.exports = (function () {
	'use strict';

	var iter = 10000;
	var step = 100;
	var max = 1001;
	var min = 1;


	function handler (n) {
		return function () {
			return n;
		};
	}

	function benchmark (n, min, max, step, iter) {
		if (n > max) {
			return true;
		}

		/**
		 * Fill routers with paths that are strings or regexps (no mixed-regexp paths).
		 */
		var expressRouter = new ExpressRouter();
		var routeit = new RouteIt();

		var paths = [];
		var path = null;

		for (var i = 0; i < n; i++) {
			paths.push(
				crypto.randomBytes(64).toString('hex').replace(/f/g, '/')
			);

			path = paths[i];

			expressRouter.set(path, handler(i));
			routeit.set(path, handler(i));
		}

		/**
		 * Test ExpressRouter
		 */
		var start1 = Date.now();
		for (i = 0; i < iter; i++) {
			path = paths[Math.floor(Math.random() * paths.length)];

			expressRouter.get(path);
		}
		var end1 = Date.now();

		/**
		 * Test RouteIt
		 */
		var start2 = Date.now();
		for (i = 0; i < iter; i++) {
			path = paths[Math.floor(Math.random() * paths.length)];

			expressRouter.get(path);
		}
		var end2 = Date.now();

		console.log('> For ' + n + ' paths and ' + iter + 'iterations');
		console.log('> ExpressRouter\'s time: ' + (end1 - start1) + ' ms');
		console.log('> RouteIt\'s time: ' + (end2 - start2) + ' ms');

		return benchmark(n + step, min, max, step, iter);
	}

	benchmark(min, min, max, step, iter);
})();

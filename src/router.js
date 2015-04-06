var Trie = require('./trie/trie');

module.exports = (function () {
	'use strict';

	function Router (config) {
		config = config || {};

		// this.strictRouting = !!config.strictRouting;

		this.trie = new Trie();
	}

	Router.prototype.get = function (pathcomps) {
		pathcomps = this.normalize(pathcomps);

		return this.trie.get(pathcomps);
	};

	Router.prototype.set = function (pathcomps, handler) {
		pathcomps = this.normalize(pathcomps);

		return this.trie.set(pathcomps, handler);
	};

	Router.prototype.normalize = function (pathcomps) {
		if (typeof pathcomps === 'string') {
			pathcomps = pathcomps.split('/');
		}
		else if (pathcomps instanceof RegExp) {
			pathcomps = [pathcomps];
		}
		else {
			pathcomps = pathcomps.reduce(function (pathcomps, pathcomp) {
				if (pathcomp === '/') {
					pathcomp = '';
				}
				else if (pathcomp instanceof RegExp) {
					pathcomp = [pathcomp];
				}
				else {
					pathcomp = pathcomp.split('/');
				}

				return pathcomps.concat(pathcomp);
			}, []);
		}

		return pathcomps;
	};

	return Router;
})();

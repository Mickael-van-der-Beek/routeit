var Trie = require('./trie');

module.exports = (function () {
	'use strict';

	function Router (config) {
		config = config || {};

		// this.strictRouting = !!config.strictRouting;

		this.trie = new Trie();
	}

	Router.prototype.publish = function (path) {
		var pathcomps = path.split('/');

		return this.trie.get(pathcomps);
	};

	Router.prototype.subscribe = function (path, handler) {
		var pathcomps = path.split('/');

		return this.trie.set(pathcomps, handler);
	};

	return Router;
})();

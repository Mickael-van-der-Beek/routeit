var Node = require('./node');

module.exports = (function () {
	'use strict';

	function Trie () {
		this.root = new Node();
	}

	Trie.prototype.get = function (pathcomps) {
		var pathcomp = null;
		var match = true;
		var nodeCache = null;
		var node = this.root;
		var len = pathcomps.length;
		var i = 0;

		while (i < len && match === true) {
			pathcomp = pathcomps[i];

			nodeCache = node;

			if (
				!(node = nodeCache.nodes.get(pathcomp)) &&
				!(node = nodeCache.regexpNodes.get(pathcomp)) &&
				!(node = this.root.regexpNodes.get(pathcomps.join('/')))
			) {
				match = false;
			}

			i += 1;
		}

		return match === true && node !== null ? node.values : null;
	};

	Trie.prototype.set = function (pathcomps, value) {
		var pathcomp = null;
		var node = this.root;
		var len = pathcomps.length;
		var i = 0;

		while (i < len) {
			pathcomp = pathcomps[i];

			if (pathcomp instanceof RegExp) {
				node = node.regexpNodes.set(pathcomp, value);
			}
			else {
				node = node.nodes.set(pathcomp, value);
			}

			i += 1;
		}

		return node.values.slice(-1)[0];
	};

	return Trie;
})();

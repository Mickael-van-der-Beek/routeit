module.exports = (function () {
	'use strict';

	function Trie () {
		this.nodes = {};
	}

	Trie.prototype.get = function (pathcomps) {
		var pathcomp = null;
		var match = true;
		var node = this;
		var len = pathcomps.length;
		var i = 0;

		while (i < len && match === true) {
			pathcomp = pathcomps[i];
			node = node.nodes;

			if (pathcomp in node) {
				node = node[pathcomp];
			}
			else {
				match = false;
			}

			i += 1;
		}

		return match === true || node === undefined ? node.values : null;
	};

	Trie.prototype.set = function (pathcomps, value) {
		var pathcomp = null;
		var node = this;
		var len = pathcomps.length;
		var i = 0;

		while (i < len) {
			pathcomp = pathcomps[i];
			node = node.nodes;

			if (!(pathcomp in node)) {
				if (i === len - 1) {
					node[pathcomp] = {
						values: [
							value
						]
					};
				}
				else {
					node[pathcomp] = {
						nodes: {}
					};
				}
			}

			node = node[pathcomp];

			i += 1;
		}

		return node.values.slice(-1)[0];
	};

	return Trie;
})();

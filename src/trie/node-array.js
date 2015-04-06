// var Node = require('./node');

module.exports = (function () {
	'use strict';

	function NodeArray () {
		this.nodes = {};
	}

	NodeArray.prototype.get = function (pathcomp) {
		return this.nodes[pathcomp] || null;
	};

	NodeArray.prototype.set = function (pathcomp, value) {
		var node;

		if (pathcomp in this.nodes) {
			node = this.nodes[pathcomp];
		}
		else {
			node = this.nodes[pathcomp] = this.createNode();
		}

		node.values.push(value);

		return node;
	};

	NodeArray.prototype.createNode = function () {
		var Node = require('./node');

		return new Node();
	};

	return NodeArray;
})();

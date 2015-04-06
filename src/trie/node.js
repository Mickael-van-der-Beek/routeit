var RegExpNodeArray = require('./regexp-node-array');
var NodeArray = require('./node-array');

module.exports = (function () {
	'use strict';

	function Node () {
		this.regexpNodes = new RegExpNodeArray();
		this.values = [];
		this.nodes = new NodeArray();
	}

	return Node;
})();

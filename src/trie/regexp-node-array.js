var NodeArray = require('./node-array');

var util = require('util');

module.exports = (function () {
	'use strict';

	function RegExpNodeArray () {
		NodeArray.call(this);

		this.regexpNodes = {};
	}

	util.inherits(RegExpNodeArray, NodeArray);

	RegExpNodeArray.prototype.get = function (pathcomp) {
		var node = null;

		var regexpSource;
		var regexp;

		for (regexpSource in this.regexpNodes) {
			regexp = new RegExp(regexpSource);

			if (regexp.test(pathcomp) === true) {
				node = this.regexpNodes[regexpSource];
				break;
			}
		}

		return node;
	};

	RegExpNodeArray.prototype.set = function (regexp, value) {
		var node;

		if (regexp.source in this.regexpNodes) {
			node = this.regexpNodes[regexp.source];
		}
		else {
			node = this.regexpNodes[regexp.source] = this.createNode();
		}

		node.values.push(value);

		return node;
	};

	return RegExpNodeArray;
})();

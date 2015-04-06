var RouteIt = require('../src/router');

var assert = require('assert');

describe('RouteIt tests', function () {
	'use strict';

	var routit = new RouteIt();

	it('subscribe() a path', function () {
		var subedhandler = function () {
			return 42;
		};

		var handler = routit.subscribe('/hello/world/!', subedhandler);

		assert.strictEqual(handler, subedhandler);
	});

	it('publish() a path', function () {
		var handlers = routit.publish('/hello/world/!');
		var handler = handlers[0];

		assert.strictEqual(handler(), 42);
	});
});

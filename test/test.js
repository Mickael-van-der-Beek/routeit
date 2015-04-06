var RouteIt = require('./coverage/instrument/src/router');

var assert = require('assert');

describe('RouteIt tests', function () {
	'use strict';

	var routeit = new RouteIt();

	it('1. set() a path', function () {
		var subedhandler = function () {
			return 42;
		};

		var handler = routeit.set('/users-1/1a2b3c4d5e6f', subedhandler);

		assert.strictEqual(handler, subedhandler);
	});

	it('1. get() a path', function () {
		var handlers = routeit.get('/users-1/1a2b3c4d5e6f');
		var handler = handlers[0];

		assert.strictEqual(handler(), 42);
	});

	it('1. get() a non-existant path', function () {
		var handlers = routeit.get('/users-1/01a2b3c4d5e6f');

		assert.strictEqual(handlers, null);
	});

	it('2. set() a RegExp path', function () {
		var subedhandler = function () {
			return 42;
		};

		var handler = routeit.set(/^(\/users-2\/[0-9a-f]{12})$/, subedhandler);

		assert.strictEqual(handler, subedhandler);
	});

	it('2. get() from a RegExp path', function () {
		var handlers = routeit.get('/users-2/1a2b3c4d5e6f');
		var handler = handlers[0];

		assert.strictEqual(handler(), 42);
	});

	it('2. get() a non-existant RegExp path', function () {
		var handlers = routeit.get('/users-2/01a2b3c4d5e6f');

		assert.strictEqual(handlers, null);
	});

	it('3. set() a mixed-RegExp path', function () {
		var subedhandler = function () {
			return 42;
		};

		var handler = routeit.set([
			'/',
			'users-3',
			/^[0-9a-f]{12}$/
		], subedhandler);

		assert.strictEqual(handler, subedhandler);
	});

	it('3. get() from a mixed-RegExp path', function () {
		var handlers = routeit.get('/users-3/1a2b3c4d5e6f');
		var handler = handlers[0];

		assert.strictEqual(handler(), 42);
	});

	it('3. get() from a non-existant mixed-RegExp path', function () {
		var handlers = routeit.get('/users-3/01a2b3c4d5e6f');

		assert.strictEqual(handlers, null);
	});

	it('4. set() a second mixed-RegExp path', function () {
		var subedhandler = function () {
			return 42;
		};

		var handler = routeit.set([
			'/',
			'users-3',
			/^[0-9a-f]{12}$/,
			'groups-4'
		], subedhandler);

		assert.strictEqual(handler, subedhandler);
	});

	it('4. get() from a second mixed-RegExp path', function () {
		var handlers = routeit.get('/users-3/1a2b3c4d5e6f/groups-4');
		var handler = handlers[0];

		assert.strictEqual(handler(), 42);
	});
});

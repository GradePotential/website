var jsdom = require('mocha-jsdom');

describe('rTap.js', () => {
	jsdom()

	before(function () {
		global.jQuery = require('jquery')
	})
	it('loads without exploding', () => {
		require('./rTap.js');
	})
})
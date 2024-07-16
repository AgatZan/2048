// import test from "node:test";
// import { strict as assert } from "node:assert";
const test = require("node:test");
const assert = require("node:assert/strict");
test("synchronous passing test", (t) => {
	// This test passes because it does not throw an exception.
	assert.strictEqual(2, 1);
	assert.strictEqual(2, 1);
});

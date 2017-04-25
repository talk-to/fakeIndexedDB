require("../../build/global");
const Event = require("../../build/lib/FakeEvent").default;
const {
    add_completion_callback,
    assert_array_equals,
    assert_equals,
    assert_false,
    assert_key_equals,
    assert_not_equals,
    assert_throws,
    assert_true,
    async_test,
    createdb,
    createdb_for_multiple_tests,
    fail,
    format_value,
    indexeddb_test,
    promise_test,
    setup,
    test,
} = require("../support-node");

const document = {};
const window = global;


    var open_rq = createdb(async_test(), 'database_name');

    open_rq.onupgradeneeded = function() {};
    open_rq.onsuccess = function(e) {
        assert_equals(e.target.result.objectStoreNames.length, 0, "objectStoreNames.length");
        this.done();
    };
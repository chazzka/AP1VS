
//EXAMPLE: takto by mohly vypadat testy
QUnit.module('checkEmail', function () {
    QUnit.test('email should be valid', function (assert) {
        assert.true(checkEmail("a@b.cz"));
    });

    QUnit.test('email should be NOT valid', function (assert) {
        assert.false(checkEmail("a@.cz"));
    });
});
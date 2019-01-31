const test = QUnit.test;

function coinToss(randomNumber) {
    if(randomNumber < 0.5) {
        return 'heads';
    }
    else {
        return 'tails';
    }

}

test('if randomNumber is less than 0.5, return heads', function(assert) {
    const result = coinToss(0.3);
    assert.equal(result, 'heads');

});

test('if randomNumber is 0.5 or greater, return tails', function(assert) {
    const result = coinToss(0.7);
    assert.equal(result, 'tails');
});
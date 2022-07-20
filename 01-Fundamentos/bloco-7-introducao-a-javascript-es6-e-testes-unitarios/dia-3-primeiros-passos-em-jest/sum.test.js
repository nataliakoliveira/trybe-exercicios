const sum = require('./sum')

it('sum two values', () => {
    expect(sum(5, 9)).toBe(14);
});
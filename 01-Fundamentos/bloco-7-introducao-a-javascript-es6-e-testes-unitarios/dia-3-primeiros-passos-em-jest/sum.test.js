const sum = require('./sum')

describe('requisito1', () => {
it('sum two values', () => {
    expect(sum(5, 9)).toBe(14);
})
});

describe('requisito2', () => {
    it('sum two values', () => {
        expect(sum(0, 0)).toBe(0);
    })
});


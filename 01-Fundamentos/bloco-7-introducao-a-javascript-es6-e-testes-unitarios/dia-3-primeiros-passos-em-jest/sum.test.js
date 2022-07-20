const sum = require('./sum')

describe('requisito1', () => {
it('sum two values', () => {
    expect(sum(5, 9)).toBe(14);
})
});

describe('requisito1.2', () => {
    it('sum two values', () => {
        expect(sum(0, 0)).toBe(0);
    })
});

describe('requisito1.4', () => {
    it('deve disparar um erro caso receba como parâmetro uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(5, '5')).toThrowError('Parameters must be numbers')
    })
})
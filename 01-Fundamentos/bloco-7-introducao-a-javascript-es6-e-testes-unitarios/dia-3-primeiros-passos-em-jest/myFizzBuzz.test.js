const myFizzBuzz = require('./myFizzBuzz');

describe('requisito3', () => {
    it('verificar se o retorno é esperado de acordo com as funções', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(2)).toBe(2);
        expect(myFizzBuzz('h')).toBe(false);

    })
})
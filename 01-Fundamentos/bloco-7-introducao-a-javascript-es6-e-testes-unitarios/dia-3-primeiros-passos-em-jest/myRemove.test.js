const myRemove = require('./myRemove.js');

describe('testando a função myRemove', () => {
    it('deve retornar uma cópia do array sem o elemento item', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
    })
})
const sum = (a, b) => {
    return a + b;
}
console.log(sum(4,5));
console.log(sum(0,0));

function sum2(a,b) {
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('parameters must be numbers')
    }
    return a+b;
}
console.log(sum(4,'5'));

module.exports = sum;

var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    MyClass.prototype.myFunc = function (myParam) {
        var sum = this.myNumber + myParam;
        return "A soma de myNumber e myParam \u00E9 ".concat(sum, ".");
    };
    return MyClass;
}());
var myObj = new MyClass(42);
console.log(myObj.myNumber); // 42
console.log(myObj.myFunc(8)); // "A soma de myNumber e myParam é 50."

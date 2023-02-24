interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `A soma de myNumber e myParam é ${sum}.`;
  }
}

const myObj = new MyClass(42);
console.log(myObj.myNumber); // 42
console.log(myObj.myFunc(8)); // "A soma de myNumber e myParam é 50."

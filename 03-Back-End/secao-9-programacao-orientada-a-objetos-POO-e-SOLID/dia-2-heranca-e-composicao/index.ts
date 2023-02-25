class Superclass {
  public isSuper;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (obj: Subclass) => {
  obj.sayHello();

  console.log(obj.isSuper ? 'Super!' : 'Sub!');
};

const mySuper = new Superclass();
const mySub = new Subclass();

myFunc(mySuper);
myFunc(mySub);

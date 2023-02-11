class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Beep Beep!');
  }

  turnOn(): void  {
    console.log('Ligando o carro');
  }
  turnOff(): void  {
    console.log('Desligando o carro');
  }
  speedUp(): void  {
    console.log('Acelerando o carro');
  }
  speedDown(): void  {
    console.log('Reduzindo a velocidade do carro');
  }
  stop(): void  {
    console.log('Parando o carro');
  }
  turn(direction: string): void  {
    console.log(`Virando para a ${direction}`);
  }
}

export default Car;
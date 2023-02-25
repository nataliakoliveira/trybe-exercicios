// refatorando usando o método estático

// Classe abstrata Character
abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

// Classe concreta MeleeCharacter
class MeleeCharacter extends Character {
  private specialMoveName: string;

  constructor(specialMoveName: string) {
      super();
      this.specialMoveName = specialMoveName;
  }

  talk(): void {
      console.log("I'm a melee character!");
  }

  specialMove(): void {
      console.log(`My special move is ${this.specialMoveName}!`);
  }
}

// Classe concreta LongRangeCharacter
class LongRangeCharacter extends Character {
  private specialMoveName: string;

  constructor(specialMoveName: string) {
      super();
      this.specialMoveName = specialMoveName;
  }

  talk(): void {
      console.log("I'm a long range character!");
  }

  specialMove(): void {
      console.log(`My special move is ${this.specialMoveName}!`);
  }
}

// Método estático para apresentar um personagem
function presentCharacter(character: Character): void {
  character.talk();
  character.specialMove();
}

// Instanciando as classes filhas com os personagens Yoshi e Samus
const yoshi = new MeleeCharacter("Egg Lay");
const samus = new LongRangeCharacter("Charge Shot");

// Acionando os métodos talk e specialMove por meio do método estático
presentCharacter(yoshi); 
// output: 
// I'm a melee character!
// My special move is Egg Lay!

presentCharacter(samus);
// output: 
// I'm a long range character!
// My special move is Charge Shot!

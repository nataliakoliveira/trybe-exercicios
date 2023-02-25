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

// Instanciando as classes filhas com os personagens Yoshi e Samus
const yoshi = new MeleeCharacter("Egg Lay");
const samus = new LongRangeCharacter("Charge Shot");

// Chamando os métodos talk e specialMove para apresentar o personagem e seus respectivos ataques especiais
yoshi.talk(); // output: I'm a melee character!
yoshi.specialMove(); // output: My special move is Egg Lay!
samus.talk(); // output: I'm a long range character!
samus.specialMove(); // output: My special move is Charge Shot! 

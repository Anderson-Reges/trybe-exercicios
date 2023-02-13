abstract class Character {
  abstract talk(): void
  abstract specialMove(): void
  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }

  specialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName}!`);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I can attack from a long range.`);
  }

  specialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName}!`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'AllForOnePush');
const samus = new LongRangeCharacter('Samus', 'AccurityShot');

console.log('METODO ABSTRATO')
console.log('-----------YOSHI-----------')
yoshi.talk()
yoshi.specialMove()
console.log('-----------SAMUS-----------')
samus.talk()
samus.specialMove()

console.log('METODO ESTATICO')
console.log('-----------YOSHI-----------')
Character.characterPresentation(yoshi)
console.log('-----------SAMUS-----------')
Character.characterPresentation(samus)


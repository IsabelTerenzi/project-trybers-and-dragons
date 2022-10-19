import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private readonly _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    }; 
    this._name = name; 
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    // o dano equivale ao valor do ataque menos o valor da defesa.
    const damage = attackPoints - this._defense;
    
    // se o dano for maior que zero, o valor de vida perdido é igual a esse dano.
    if (damage > 0) {
      this._lifePoints -= damage;
    }

    // se o valor de vida chega a 0, ele se fixa em -1.
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    // o dano recebe como parâmetro os pontos de ataque, que nesse caso é o valor da força do fighter.
    enemy.receiveDamage(this._strength);  
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10); 
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    
    // o valor de vida do personagem não pode ser maior que o da sua raça, então precisam ser igualados.
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    // ao subir de nível e aumentar o máximo de valor de vida do personagem, o valor de vida também precisa ser aumentado.
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;

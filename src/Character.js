"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this._dexterity = (0, utils_1.default)(1, 10);
        this._race = new Races_1.Elf(name, this._dexterity);
        this._archetype = new Archetypes_1.Mage(name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
        this._name = name;
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get dexterity() {
        return this._dexterity;
    }
    get energy() {
        return Object.assign({}, this._energy);
    }
    receiveDamage(attackPoints) {
        // o dano equivale ao valor do ataque menos o valor da defesa.
        const damage = attackPoints - this._defense;
        // se o dano for maior que zero, o valor de vida perdido é igual a esse dano.
        if (damage > 0)
            this._lifePoints -= damage;
        // se o valor de vida chega a 0, ele se fixa em -1.
        if (this._lifePoints <= 0)
            this._lifePoints = -1;
        return this._lifePoints;
    }
    attack(enemy) {
        // o dano recebe como parâmetro os pontos de ataque, que nesse caso é o valor da força do fighter.
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
        // o valor de vida do personagem não pode ser maior que o da sua raça, então precisam ser igualados.
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        // ao subir de nível e aumentar o máximo de valor de vida do personagem, o valor de vida também precisa ser aumentado.
        this._lifePoints = this._maxLifePoints;
    }
}
exports.default = Character;

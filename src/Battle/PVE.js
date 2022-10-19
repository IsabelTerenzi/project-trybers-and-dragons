"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(_playerOne, _monsters) {
        super(_playerOne);
        this._playerOne = _playerOne;
        this._monsters = _monsters;
    }
    fight() {
        this._monsters.forEach((monster) => {
            while (monster.lifePoints > 0) {
                this._playerOne.attack(monster);
                this._playerOne.receiveDamage(monster.strength);
            }
        });
        return super.fight();
    }
}
exports.default = PVE;

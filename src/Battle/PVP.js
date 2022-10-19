"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(_playerOne, _playerTwo) {
        super(_playerOne);
        this._playerOne = _playerOne;
        this._playerTwo = _playerTwo;
    }
    fight() {
        while (this._playerOne.lifePoints > 0 && this._playerTwo.lifePoints > 0) {
            this._playerOne.attack(this._playerTwo);
            this._playerTwo.attack(this._playerOne);
        }
        return super.fight();
    }
}
exports.default = PVP;

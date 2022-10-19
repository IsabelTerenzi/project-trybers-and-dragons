"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf.counter += 1;
    }
    static createdRacesInstances() {
        return Elf.counter;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Elf.counter = 0;
exports.default = Elf;

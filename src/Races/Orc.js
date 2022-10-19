"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 74;
        Orc.counter += 1;
    }
    static createdRacesInstances() {
        return Orc.counter;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Orc.counter = 0;
exports.default = Orc;

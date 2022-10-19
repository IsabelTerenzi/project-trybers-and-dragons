"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 60;
        Halfling.counter += 1;
    }
    static createdRacesInstances() {
        return Halfling.counter;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
Halfling.counter = 0;
exports.default = Halfling;

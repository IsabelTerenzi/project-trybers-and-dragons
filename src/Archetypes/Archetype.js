"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Archetype {
    constructor(_name, _special = 0, _cost = 0) {
        this._name = _name;
        this._special = _special;
        this._cost = _cost;
    }
    get name() {
        return this._name;
    }
    get special() {
        return this._special;
    }
    get cost() {
        return this._cost;
    }
    static createdArchetypeInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Archetype;

import Race from './Race';

class Dwarf extends Race {
  _maxLifePoints: number;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.counter += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
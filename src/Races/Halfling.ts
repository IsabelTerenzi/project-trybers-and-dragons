import Race from './Race';

class Halfling extends Race {
  _maxLifePoints = 60;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.counter += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
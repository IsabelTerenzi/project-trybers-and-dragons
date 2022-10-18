import Race from './Race';

class Orc extends Race {
  _maxLifePoints = 74;
  static counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.counter += 1;
  }

  static createdRacesInstances(): number {
    return Orc.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
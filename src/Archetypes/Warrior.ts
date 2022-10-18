import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  _energyType: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType; 
  }

  static createdArchetypeInstances(): number {
    return Warrior.counter;
  }
}

export default Warrior;
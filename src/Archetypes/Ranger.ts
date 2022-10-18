import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  _energyType: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType; 
  }

  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }
}

export default Ranger;
import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  _energyType: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType; 
  }

  static createdArchetypeInstances(): number {
    return Mage.counter;
  }
}

export default Mage;
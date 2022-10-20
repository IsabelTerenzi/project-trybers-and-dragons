import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _playerOne: Fighter,
    private _monsters: SimpleFighter[],
  ) { 
    super(_playerOne);
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (monster.lifePoints > 0 && this._playerOne.lifePoints > 0) {
        this._playerOne.attack(monster);
        monster.attack(this._playerOne);
      }
      return this._playerOne.lifePoints >= 0;
    });
    return super.fight();
  }
}

export default PVE;
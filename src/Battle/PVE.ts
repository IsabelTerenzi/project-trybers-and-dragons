/* import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _playerOne: Character | Fighter,
    private _monsters: SimpleFighter[],
  ) { 
    super(_playerOne);
  }

  fight(): number {
    this._monsters.forEach((monster: SimpleFighter) => {
      while (monster.lifePoints > 0) {
        this._playerOne.attack(monster);
        this._playerOne.receiveDamage(monster.strength);
      }
    });
    return super.fight();
  }
}

export default PVE;
*/
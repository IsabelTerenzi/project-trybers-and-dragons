import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _playerOne: Character | Fighter,
    private _monsters: SimpleFighter[] | Fighter[],
  ) { super(_playerOne); }

  fight(): number {
    this._monsters.forEach((monster: SimpleFighter | Fighter) => {
      while (monster.lifePoints > 0 && this._playerOne.lifePoints > 0) {
        this._playerOne.attack(monster);
        monster.attack(this._playerOne);
      }
    });
    return super.fight();
  }
}

export default PVE;
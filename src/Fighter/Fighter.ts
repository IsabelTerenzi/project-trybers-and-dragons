import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends Omit<SimpleFighter, 'attack'> {
  defense: number;
  energy?: Energy;
  attack: (enemy: SimpleFighter | Fighter) => void;
  special?: (enemy: Fighter) => void;
  levelUp:() => void;
}

export default Fighter;

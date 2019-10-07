import '../styles/main.scss';
import 'bootstrap';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import sloth from '../assets/image';


const init = () => {
  eat.createEatButtons();
  play.createPlayButtons();
  fight.createFightButtons();
  sleep.createSleepButtons();
  sloth.printImage();
};

init();

import '../styles/main.scss';
import 'bootstrap';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';


const init = () => {
  eat.createEatButtons();
  play.createPlayButtons();
  fight.createFightButtons();
};

init();

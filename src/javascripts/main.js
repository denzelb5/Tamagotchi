import '../styles/main.scss';
import 'bootstrap';
import eat from './components/eat';
import play from './components/play';


const init = () => {
  eat.createEatButtons();
  play.createPlayButtons();
};

init();

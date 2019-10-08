import utilities from '../../helpers/utilities';
import './fight.scss';

let strength = 100;

const hitting = () => {
  let hit = strength - 10;
  if (hit > 100) {
    hit = 100;
  }
  strength = hit;
  document.getElementById('strength-bar').setAttribute('style', `width: ${strength}%`);
};

const runaway = () => {
  let run = strength + 1;
  if (run > 100) {
    run = 100;
  }
  strength = run;
  document.getElementById('strength-bar').setAttribute('style', `width: ${strength}%`);
};

const getStrength = () => strength;

const createFightButtons = () => {
  let domString = '';
  domString += `
    <div class='button-container'>
      <button id='runaway' class='button'>Runaway!</button>
      <button id='hit' class='button'>Hit</button>
    </div>
    <div id="strength-progress-container">
      <div id="strength-progress">
        <div id="strength-bar" class="quad-bar" style="width: ${strength}%"></div>
      </div>
    </div>
  `;
  utilities.printToDom(domString, 'fight');
  document.getElementById('hit').addEventListener('click', hitting);
  document.getElementById('runaway').addEventListener('click', runaway);
};

export default { createFightButtons, getStrength };

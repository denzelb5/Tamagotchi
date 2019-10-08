import utilities from '../../helpers/utilities';

import './sleep.scss';

let energy = 50;

const takeNap = () => {
  let nap = energy + 50;
  if (nap > 100) {
    nap = 100;
  }
  energy = nap;
  document.getElementById('sleep-bar').setAttribute('style', `width: ${energy}%`);
};

const deepSleep = () => {
  let sleep = energy + 60;
  if (sleep > 100) {
    sleep = 100;
  }
  energy = sleep;
  document.getElementById('sleep-bar').setAttribute('style', `width: ${energy}%`);
};

const getEnergy = () => energy;


const createSleepButtons = () => {
  let domString = '';
  domString += `
  <div id="sleep-progress-container">
      <div id="sleep-progress">
        <div id="sleep-bar" class="quad-bar" style="width: ${energy}%"></div>
      </div>
    </div>
  <div id="sleep-button-container">
    <button id='nap' class='sleep-button'>Nap</button>
    <button id='deep-sleep' class='sleep-button'>Deep-sleep</button>
  </div>
  
  `;
  utilities.printToDom(domString, 'sleep');
  document.getElementById('nap').addEventListener('click', takeNap);
  document.getElementById('deep-sleep').addEventListener('click', deepSleep);
};

export default { createSleepButtons, getEnergy };

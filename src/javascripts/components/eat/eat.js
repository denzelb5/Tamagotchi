import utilities from '../../helpers/utilities';

import './eat.scss';


let full = 100;

const addingHealthyFood = () => {
  let healthy = full + 10;
  if (healthy > 100) {
    healthy = 100;
  }
  full = healthy;
  document.getElementById('myBar').setAttribute('style', `width: ${full}%`);
};

const addingSnack = () => {
  let snack = full - 3;
  if (snack > 100) {
    snack = 100;
  }
  full = snack;
  document.getElementById('myBar').setAttribute('style', `width: ${full}%`);
};

const getFull = () => full;

const createEatButtons = () => {
  let domString = '';
  domString += `
    <div class='button-container'>
      <button id='healthy' class='button'>Healthy Meal</button>
      <button id='snack' class='button'>Snack</button>
    </div>
    <div id="progress-container">
      <div id="myProgress">
        <div id="myBar" class="quad-bar" style="width: ${full}%"></div>
      </div>
    </div>
    
  `;
  utilities.printToDom(domString, 'eat');
  document.getElementById('healthy').addEventListener('click', addingHealthyFood);
  document.getElementById('snack').addEventListener('click', addingSnack);
};

export default { createEatButtons, getFull };

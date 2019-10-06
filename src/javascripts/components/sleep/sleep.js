import utilities from '../../helpers/utilities';

import './sleep.scss';


const createSleepButtons = () => {
  let domString = '';
  domString += `
  <div class="button-container">
    <button id='nap' class='button'>Nap</button>
    <button id='deep-sleep' class='button'>Deep-sleep</button>
  </div>
  <div id="progress-container">
      <div id="myProgress">
        <div id="myBar" style="width: 80%"></div>
      </div>
    </div>
  `;
  utilities.printToDom(domString, 'sleep');
};

export default { createSleepButtons };

import utilities from '../helpers/utilities';

const createSleepButtons = () => {
  let domString = '';
  domString += `
  <div class="button-container">
    <button id='nap' class='button'>Nap</button>
    <button id='deep-sleep' class='button'>Deep-sleep</button>
  </div>
  <div id="progress-bar">
      <progress value='1' label="fullness"></progress>
  </div>
  `;
  utilities.printToDom(domString, 'sleep');
};

export default { createSleepButtons };

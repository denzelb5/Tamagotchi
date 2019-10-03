import utilities from '../helpers/utilities';

const createSleepButtons = () => {
  let domString = '';
  domString += `
    <button id='nap' class='button'>Nap</button>
    <button id='deep-sleep' class='button'>Deep-sleep</button>
  `;
  utilities.printToDom(domString, 'sleep');
};

export default { createSleepButtons };

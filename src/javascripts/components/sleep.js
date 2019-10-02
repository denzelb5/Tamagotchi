import utilities from '../helpers/utilities';

const createSleepButtons = () => {
  let domString = '';
  domString += `
    <button id='nap'>Nap</button>
    <button id='deep-sleep'>Deep-sleep</button>
  `;
  utilities.printToDom(domString, 'sleep');
};

export default { createSleepButtons };

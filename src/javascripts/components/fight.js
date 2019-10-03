import utilities from '../helpers/utilities';

const createFightButtons = () => {
  let domString = '';
  domString += `
    <button id='runaway' class='button'>Runaway!</button>
    <button id='hit' class='button'>Hit</button>
  `;
  utilities.printToDom(domString, 'fight');
};

export default { createFightButtons };

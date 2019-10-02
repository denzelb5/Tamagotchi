import utilities from '../helpers/utilities';

const createFightButtons = () => {
  let domString = '';
  domString += `
    <button id='runaway'>Runaway!</button>
    <button id='hit'>Hit</button>
  `;
  utilities.printToDom(domString, 'fight');
};

export default { createFightButtons };

import utilities from '../helpers/utilities';

const createEatButtons = () => {
  let domString = '';
  domString += `
    <button id='healthy' class='button'>Healthy Meal</button>
    <button id='snack' class='button'>Snack</button>
  `;
  utilities.printToDom(domString, 'eat');
};


export default { createEatButtons };

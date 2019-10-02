import utilities from '../helpers/utilities';

const createEatButtons = () => {
  let domString = '';
  domString += `
    <button id='healthy'>Healthy Meal</button>
    <button id='snack'>Snack</button>
  `;
  utilities.printToDom(domString, 'eat');
};


export default { createEatButtons };

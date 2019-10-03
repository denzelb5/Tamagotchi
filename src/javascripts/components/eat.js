import utilities from '../helpers/utilities';

const createEatButtons = () => {
  let domString = '';
  domString += `
    <div class='button-container'>
      <button id='healthy' class='button'>Healthy Meal</button>
      <button id='snack' class='button'>Snack</button>
    </div>
    <div id="progress-bar">
      <progress value='1' label="fullness"></progress>
    
    </div>
  `;
  utilities.printToDom(domString, 'eat');
};


export default { createEatButtons };

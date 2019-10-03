import utilities from '../helpers/utilities';

const createFightButtons = () => {
  let domString = '';
  domString += `
    <div class='button-container'>
      <button id='runaway' class='button'>Runaway!</button>
      <button id='hit' class='button'>Hit</button>
    </div>
    <div id="progress-bar">
      <progress value='1' label="fullness"></progress>
    </div>
  `;
  utilities.printToDom(domString, 'fight');
};

export default { createFightButtons };

import utilities from '../../helpers/utilities';
import './fight.scss';

const createFightButtons = () => {
  let domString = '';
  domString += `
    <div class='button-container'>
      <button id='runaway' class='button'>Runaway!</button>
      <button id='hit' class='button'>Hit</button>
    </div>
    <div id="progress-container">
      <div id="myProgress">
        <div id="myBar" style="width: 50%"></div>
      </div>
    </div>
  `;
  utilities.printToDom(domString, 'fight');
};

export default { createFightButtons };

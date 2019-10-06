import utilities from '../../helpers/utilities';

import './play.scss';

const createPlayButtons = () => {
  let domString = '';
  domString += `
  <div class="button-container">
    <button id='super-fun' class='button'>Super fun!</button>
    <button id='fun' class='button'>Fun</button>
  </div>
  <div id="progress-container">
      <div id="myProgress">
        <div id="myBar" style="width: 20%"></div>
      </div>
    </div>
  `;
  utilities.printToDom(domString, 'play');
};

export default { createPlayButtons };

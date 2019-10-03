import utilities from '../helpers/utilities';

const createPlayButtons = () => {
  let domString = '';
  domString += `
  <div class="button-container">
    <button id='super-fun' class='button'>Super fun!</button>
    <button id='fun' class='button'>Fun</button>
  </div>
  <div id="progress-bar">
      <progress value='1' label="fullness"></progress>
  </div>
  `;
  utilities.printToDom(domString, 'play');
};

export default { createPlayButtons };

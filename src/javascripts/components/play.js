import utilities from '../helpers/utilities';

const createPlayButtons = () => {
  let domString = '';
  domString += `
    <button id='super-fun' class='button'>Super fun!</button>
    <button id='fun' class='button'>Fun</button>
  `;
  utilities.printToDom(domString, 'play');
};

export default { createPlayButtons };

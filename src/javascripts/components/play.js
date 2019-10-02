import utilities from '../helpers/utilities';

const createPlayButtons = () => {
  let domString = '';
  domString += `
    <button id='super-fun'>Super fun!</button>
    <button id='fun'>Fun</button>
  `;
  utilities.printToDom(domString, 'play');
};

export default { createPlayButtons };

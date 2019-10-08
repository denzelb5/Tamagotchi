import utilities from '../javascripts/helpers/utilities';
import sloth from './sloth-drawing.png';

import './image.scss';

const printImage = () => {
  const domString = `<img src=${sloth} alt="picture of a minion"/>`;
  document.getElementById('pet').innerHTMl = domString;
  utilities.printToDom(domString, 'pet');
};

export default { printImage };

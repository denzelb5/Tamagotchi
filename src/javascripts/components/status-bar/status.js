import $ from 'jquery';
import utilities from '../../helpers/utilities';
import fun from '../play/play';
import full from '../eat/eat';
import strength from '../fight/fight';
import sleep from '../sleep/sleep';


import './status.scss';

const getAverage = () => {
  const funOutput = fun.getFun();
  const eatOutput = full.getFull();
  const strengthOutput = strength.getStrength();
  const energyOutput = sleep.getEnergy();
  const average = (funOutput + eatOutput + strengthOutput + energyOutput) / 4;
  return average;
};


const printStatusBar = () => {
  let domString = '';
  domString += `
  <div id="status-progress-container">
  <div id="status-progress">
    <div id="status-bar" style="width: ${getAverage()}%"></div>
  </div>
</div>
`;
  utilities.printToDom(domString, 'progress');
  utilities.printToDom(getAverage(), 'status-bar');
  document.getElementsByTagName('button').addEventListener('click', getAverage);
};

$('button').on('click', getAverage());

export default { printStatusBar };

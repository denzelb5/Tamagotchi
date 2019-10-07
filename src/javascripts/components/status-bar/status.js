import utilities from '../../helpers/utilities';
import fun from '../play/play';

const status = fun.value;
// eslint-disable-next-line no-console
console.log(status);

const printStatusBar = () => {
  let domString = '';
  domString += `
  <div id="status-progress-container">
  <div id="status-progress">
    <div id="status-bar" style="width: ${status}%"></div>
  </div>
</div>
`;
  utilities.printToDom(domString, 'progress');
};

export default { printStatusBar };

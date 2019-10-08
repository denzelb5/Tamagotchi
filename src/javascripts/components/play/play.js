import utilities from '../../helpers/utilities';

import './play.scss';

let fun = 50;

const playVideoGame = () => {
  let video = fun + 50;
  if (video > 100) {
    video = 100;
  }
  fun = video;
  document.getElementById('fun-bar').setAttribute('style', `width: ${fun}%`);
};

const watchTV = () => {
  let tv = fun + 2;
  if (tv > 100) {
    tv = 100;
  }
  fun = tv;
  document.getElementById('fun-bar').setAttribute('style', `width: ${fun}%`);
};

const getFun = () => fun;

const createPlayButtons = () => {
  let domString = '';
  domString += `
  <div class="button-container">
    <button id='video-game' class='button'>Play Video Game</button>
    <button id='tv' class='button'>Watch TV</button>
  </div>
  <div id="fun-progress-container">
      <div id="fun-progress">
        <div id="fun-bar" class="quad-bar" style="width: ${fun}%"></div>
      </div>
    </div>
  `;
  utilities.printToDom(domString, 'play');
  document.getElementById('video-game').addEventListener('click', playVideoGame);
  document.getElementById('tv').addEventListener('click', watchTV);
};

export default { createPlayButtons, getFun };

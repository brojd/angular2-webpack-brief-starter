import './images/postcss.png';
import './images/typescript.png';
import './images/webpack.png';
import './app.pcss';
import updateClock from './clock/clock';

(() => {
  const displayClock = () => {
    const clockElem = document.querySelector('.yourPrefix-clock');
    clockElem.innerHTML = updateClock();
  };
  displayClock();
  setInterval(displayClock, 1000);
})();
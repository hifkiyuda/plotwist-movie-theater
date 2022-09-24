import $ from 'jquery';
import moment from 'moment';

const clock = () => {
  const displayTime = () => {
    const clockDisplay = document.querySelector('footer-bar');
    const clockValue = clockDisplay.value;

    moment.locale('id');
    clockDisplay.insertClock = $(clockValue).text(moment().format('LTS'));

    clockDisplay.insertClock = clockValue.innerText;
  };

  const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
  };

  updateTime();
};

export default clock;

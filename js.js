const countdown = () => {
  // select elements to display countdown time in
  const daysBoard = document.querySelector('.days');
  const hoursBoard = document.querySelector('.hours');
  const minutesBoard = document.querySelector('.minutes');
  const secondsBoard = document.querySelector('.seconds');

  const updateTime = () => {
    const now = new Date();
    // set the date to countdown to
    const christmas = new Date(now.getFullYear(), 11, 25);
    // in case we celebrated christmas this year already
    if(now.getMonth() === 11 && now.getDate() > 25) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
    // calculate difference is days, hours, minutes and seconds
    const difference = christmas.getTime() - now.getTime();
    const days = Math.floor(difference / (24 * 60 * 60 * 1000));
    let hours = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((difference % (60 * 1000)) / 1000);

    // fix issue of DST
    const nowOffset = now.getTimezoneOffset();
    const christmasOffset = christmas.getTimezoneOffset();
    if(nowOffset !== christmasOffset) {
      hours--;
    }
    // display countdown timer in elements
    daysBoard.textContent = days;
    hoursBoard.textContent = hours;
    minutesBoard.textContent = minutes;
    secondsBoard.textContent = seconds;
  };
  setInterval(updateTime,1000);
};
window.addEventListener('load', countdown);

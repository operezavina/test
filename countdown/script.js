let countDown;
let timeInterval;
const endDate = document.querySelector('input[name="endDate"]');
const clock = document.querySelector("#clock");
const daysSpan = document.querySelector(".days");
const hoursSpan = document.querySelector(".hours");
const minutesSpan = document.querySelector(".minutes");
const secoundsSpan = document.querySelector(".secounds");

endDate.addEventListener('change', function(e) {
  e.preventDefault;
  clearInterval(timeInterval);
  const endDateTemp = new Date(this.value);
  startClock(endDateTemp);
})

function startClock(endTime){
  function updateCounter(){
    let t = timeRemining(endTime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secoundsSpan.innerHTML = t.secounds;
    if (t.total < 0){
      clearInterval(timeInterval);
    }
  }
    updateCounter();
    timeInterval = setInterval(updateCounter,1000);
}

function timeRemining(endTime){
  let t = Date.parse(endTime) - Date.parse(new Date());
  let secounds = Math.floor((t/1000)%60);
  let minutes = Math.floor((t/1000/60)%60);
  let hours = Math.floor((t/(1000*60*60))%24);
  let days = Math.floor(t/(1000*60*60*24));

  return {'total':t, 'secounds':secounds, 'minutes':minutes, 'days':days, 'hours':hours};
}

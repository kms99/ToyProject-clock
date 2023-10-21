const $hour = document.querySelector('.clock__hour');
const $minute = document.querySelector('.clock__minute');
const $second = document.querySelector('.clock__second');
const $textHour = document.querySelector('.text-hours');
const $textMinute = document.querySelector('.text-minute');
const $textSecond = document.querySelector('.text-second');

setInterval(function(){
    const date = new Date();
    $hour.style.transform = `translate(-50%,-50%) rotate(${date.getHours()*30}deg)`;
    $minute.style.transform = `translate(-50%,-50%) rotate(${date.getMinutes()*6}deg)`;
    $second.style.transform = `translate(-50%,-50%) rotate(${date.getSeconds()*6}deg)`;

    $textHour.innerText=date.getHours()/10>=1?date.getHours():`0${date.getHours()}`;
    $textMinute.innerText=date.getMinutes()/10>=1?date.getMinutes():`0${date.getMinutes()}`;
    $textSecond.innerText=date.getSeconds()/10>=1?date.getSeconds():`0${date.getSeconds()}`;
},1000)

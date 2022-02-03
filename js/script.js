const ourSkillSection = document.querySelector(".our-skills");
const skillWidth = document.querySelectorAll(".skill h3 span");
const progressBar = document.querySelectorAll(".the-progress span");
const servicesSection = document.querySelector(".services");

const daysBox = document.querySelector(".days");
const hoursBox = document.querySelector(".hours");
const minutesBox = document.querySelector(".minutes");
const secondsBox = document.querySelector(".seconds");

const statsSection = document.querySelector(".stats");
const spanNumber = document.querySelectorAll(".stats .box .number");
let started = false;

function addZeroIfWant(number) {
    if (number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}

function increaseTo(el) {
    const goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}

window.onscroll = function () {
    if (window.scrollY >= (ourSkillSection.offsetTop + 100)) {
        progressBar.forEach((bar, index) => {
            bar.style.width = skillWidth[index].textContent;
        });
    } else if (window.scrollY <= servicesSection.offsetTop) {
        progressBar.forEach((bar) => {
            bar.style.width = "0px";
        });
    }
    if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            spanNumber.forEach((item) => {
                increaseTo(item);
            });
        }
        started = true;
    }
}

let atLast = new Date("Dec 29 2022 12:59:95").getTime();

const counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDifference = atLast - dateNow;
    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    let hoursByMillSeconds = dateDifference % (1000 * 60 * 60 * 24);
    let hours = Math.floor(hoursByMillSeconds / (1000 * 60 * 60));
    let minutesByMillSeconds = hoursByMillSeconds % (1000 * 60 * 60);
    let minutes = Math.floor(minutesByMillSeconds / (1000 * 60));
    let secondsByMilliSeconds = minutesByMillSeconds % (1000 * 60);
    let seconds = Math.floor(secondsByMilliSeconds / (1000));
    
    if (days == 0) {
        clearInterval(counter);
    }

    daysBox.textContent = addZeroIfWant(days);
    hoursBox.textContent = addZeroIfWant(hours);
    minutesBox.textContent = addZeroIfWant(minutes);
    secondsBox.textContent = addZeroIfWant(seconds);
}, 1000);

const forms = document.querySelectorAll("form");
forms.forEach((form) => {
    form.onsubmit = function (event) {
        event.preventDefault();
    }
});

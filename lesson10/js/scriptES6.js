window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

    //ES6 Стрелочная функция 
const hideTabContent = a => {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
    }
};
hideTabContent(1);

    //ES6 Стрелочная функция 
const showTabContent = b => {
    if (tabContent[b].classList.contains("hide")) {
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
};

info.addEventListener("click", function(event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});


//Timer

let deadLine = "2018-12-01";
    //ES6 Стрелочная функция 
const getTimeRemaining = endtime => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            "total" : t,
            "hours" : hours,
            "minutes" : minutes,
            "seconds" : seconds
        };

};
    //ES6 Стрелочная функция 
const setClock = (id, endtime) => {
    let timer = document.getElementById(id),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds"),
        timeInterval = setInterval(updateClock, 1000);
    
        //Здесь если я меняю на стрелочную, выдает ошибку в предыдущей строке updateClock is not defined. Пока не понимаю почему. 
    function updateClock() {
        let t2 = getTimeRemaining(endtime);
        
        //ES6 Интерполяция
        if (t2.hours < 10) {
            hours.textContent = `0${t2.hours}`;
        } else {
            hours.textContent = t2.hours;
        }

        if (t2.minutes < 10) {
            minutes.textContent = `0${t2.minutes}`;
        } else {
            minutes.textContent = t2.minutes;
        }

        if (t2.seconds < 10) {
            seconds.textContent = `0${t2.seconds}`;
        } else {
            seconds.textContent = t2.seconds;
        }

        if(t2.total <= 0) {
            hours.textContent = `00`;
            minutes.textContent = `00`;
            seconds.textContent = `00`;
            clearInterval(timeInterval);
        }
    }
};

setClock("timer", deadLine);


// Modal

let descriptionBtnAndMore = document.querySelectorAll(".description-btn, .more"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close");

    //ES6 Стрелочная функция
    descriptionBtnAndMore.forEach((e) => {
        e.addEventListener("click", () => {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });
    });
    
    close.addEventListener("click", () => {
            overlay.style.display = "none";
            this.classList.remove("more-splash");
            document.body.style.overflow = "";
        });





});

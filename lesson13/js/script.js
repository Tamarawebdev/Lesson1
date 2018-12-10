window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", function (event) {
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

    let deadLine = "2019-01-01";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t2 = getTimeRemaining(endtime);

            if (t2.hours < 10) {
                hours.textContent = "0" + t2.hours;
            } else {
                hours.textContent = t2.hours;
            }

            if (t2.minutes < 10) {
                minutes.textContent = "0" + t2.minutes;
            } else {
                minutes.textContent = t2.minutes;
            }

            if (t2.seconds < 10) {
                seconds.textContent = "0" + t2.seconds;
            } else {
                seconds.textContent = t2.seconds;
            }

            if (t2.total <= 0) {
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                clearInterval(timeInterval);
            }
        }
    }

    setClock("timer", deadLine);


    // Modal

    let descriptionBtnAndMore = document.querySelectorAll(".description-btn, .more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");


    descriptionBtnAndMore.forEach(function (e) {
        e.addEventListener("click", function () {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });
    });

    close.addEventListener("click", function () {
        overlay.style.display = "none";
        this.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

    // Form
    let message = {
        loading: "Loading...",
        success: "Thank you, we will contact you soon!",
        failure: "Something went wrong..."
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        contactForm = document.getElementById('form'),
        inputContact = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement("div");
    statusMessage.classList.add("status");

    function sendForm(elem, a) {
        elem.addEventListener("submit", function (event) {
                event.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {

                    return new Promise(function (resolve, reject) {
                        let myRequest = new XMLHttpRequest();
                        myRequest.open("POST", "server.php");
                        myRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


                        myRequest.onreadystatechange = function () {
                            if (myRequest.readyState < 4) {
                                resolve();
                            } else if (myRequest.readyState === 4 && myRequest.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        };
                        myRequest.send(data);
                    });
                } // End postData


            function clearInput() {
                for (let i = 0; i < a.length; i++) {
                    a[i].value = "";
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)

            });
        } // End sendForm

        sendForm(form, input);
        sendForm(contactForm, inputContact);

        let phone = document.querySelectorAll('[name="phone"]');

        for (let i = 0; i < phone.length; i++) {
            phone[i].addEventListener('input', function () {
                phone[i].value = phone[i].value.replace(/[^0-9 +]/g, "");
            });
        }


    // Slider
        let slideIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");
    
    showSlides(slideIndex);
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");
        dots.forEach((item) => item.classList.remove("dot-active"));
        
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener("click", function() {
        plusSlides(-1);
    });
    next.addEventListener("click", function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener("click", function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    // Calculator
    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener("change", function() {
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if(persons.value == "" || restDays.value == "") {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });
        restDays.addEventListener("change", function() {
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if(persons.value == "" || restDays.value == "") {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });
        place.addEventListener("change", function() {
            if (restDays.value == "" || persons.value == "") {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });


        let number = document.querySelectorAll('[type="number"]');

        for (let i = 0; i < number.length; i++) {
            number[i].addEventListener('input', function () {
                number[i].value = number[i].value.replace(/[^0-9]/g, "");
            });
        }


        







});
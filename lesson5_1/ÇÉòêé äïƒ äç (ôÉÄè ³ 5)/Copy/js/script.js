"use strict";

let menuElement = document.querySelectorAll(".menu-item"),
    menuTop = document.querySelector(".menu"),
    titleChange = document.querySelector("#title"),
    classColumn = document.querySelectorAll(".column"),
    advertising = document.querySelectorAll(".adv");

menuTop.insertBefore(menuElement[2], menuElement[1]);
menuElement = document.createElement("li");
menuTop.appendChild(menuElement);
menuElement.classList.add("menu-item");
menuElement.textContent = "Пятый пункт";

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; 

titleChange.textContent = "Мы продаем только подлинную технику Apple";

classColumn[1].removeChild(advertising[0]);

let question = prompt("Как вы относитесь к технике Apple?", "")
document.getElementById("prompt").textContent = question;




/*
let menuElement = document.querySelectorAll(".menu-item"),
    menuTop = document.querySelector(".menu");

//menuTop.insertBefore(menuElement[2], menuElement[1]); // Когда эта строка здесь ошибка есть!!
menuElement = document.createElement("li");
menuTop.appendChild(menuElement);
menuElement.classList.add("menu-item");
menuElement.textContent = "Пятый пункт";
menuTop.insertBefore(menuElement[2], menuElement[1]); // Когда эта строка здесь ошибки нет!
*/



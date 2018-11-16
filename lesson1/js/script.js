"use strict";

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let mustHaveExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
let willCost = prompt("Во сколько обойдется?", "");


let appData = {
    budget: money,
    timeData: time,
    //expenses: {mustHaveExpenses: "", willCost: ""}, // Вариант 1
    //expenses: {"обязательная статья": "", "willCost": ""}, // Вариант 2
    expenses: {"обязательная статья": mustHaveExpenses, "статья 2": willCost}, // Вариант 3. Какой лучше? Если они вообще правильные)
    optionalExpenses: {"": ""},
    income: [],
    savings: false
};


alert(appData.budget / 30);

//console.log(appData);
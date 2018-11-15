"use strict";

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {"mustHaveExpenses" : "willCost"},
    optionalExpenses: {"" : ""},
    income: [],
    savings: false
};

let mustHaveExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
let willCost = prompt("Во сколько обойдется?", "");


alert(appData.budget / 30);


"use strict";

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


let spending1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let willCost1 = prompt("Во сколько обойдется?", "");
let spending2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let willCost2 = prompt("Во сколько обойдется?", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {}, //{[spending1]: willCost1, [spending2]: willCost2},
    optionalExpenses: {"": ""},
    income: [],
    savings: false
};

appData.expenses[spending1] = willCost1;
appData.expenses[spending2] = willCost2;


alert(appData.budget / 30);

console.log(appData);
"use strict";

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while(isNaN(money) || money == "" || money == null) {
	money = +prompt("Ваш бюджет на месяц?", "");
	}
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
	let spending1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
			willCost1 = prompt("Во сколько обойдется?", "");
	if ( (typeof(spending1)) === "string" && (typeof(spending1)) != null && (typeof(willCost1)) != null && spending1 != "" && willCost1 != "" && spending1.length < 50) {
			console.log("Done!");
			appData.expenses[spending1] = willCost1;
	} else {
		i--;
	}
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i <= 3; i++) {
        let number1 = prompt("Статья необязательных расходов?", ""),
                answer1 = prompt("Во сколько обойдется?", "");
        if ( (typeof(number1)) === "string" && (typeof(number1)) != null && (typeof(answer1)) != null && number1 != "" && answer1 != "" && number1.length < 50) {
                console.log("Done!");
        for (let num = 1; num <= 3; num++) {
                appData.optionalExpenses[num] = answer1;
        }
        } else {
            i--;
        }
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("Минимальный уровень достатка.");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Средний уровень достатка.");
    } else if (appData.moneyPerDay > 2000) {
        alert("Высокий уровень достатка.");
    }	else {
        alert("Произошла ошибка");
    }
    appData.moneyPerDay = (appData.budget / 30).toFixed();
}
detectLevel();


function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита " + appData.monthIncome);
	}
}
checkSavings();

console.log(appData);

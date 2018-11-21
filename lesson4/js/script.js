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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let num = 1; num <= 3; num++) {
            let number1 = prompt("Статья необязательных расходов?", "");
                appData.optionalExpenses[num] = number1;
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Способы дополнительного заработка: (Перечислите через запятую)", "");
              if ( (typeof(items)) === "string" && items != "" && (typeof(items)) != null) {
                    appData.income = items.split(", ");
                    appData.income.push(prompt("Может что то еще?"));
                    appData.income.sort();
                    console.log("Сделано!");
            appData.income.forEach(function(item, i, mass) {
                    for (let num = 1; num <= 3; num++) {
                    alert("Способы дополнительного заработка: " + num + ": " + item);
                    }
                });
            } else {
                i--;
            } 
        }
        
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}


//console.log(appData);

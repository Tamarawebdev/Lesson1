"use strict";

let idStart = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.querySelectorAll(".expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalexpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings =document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

  
    
    expensesBtn.disabled = true;
    optionalexpensesBtn.disabled = true;
    countBtn.disabled = true;
    expensesBtn.style.background = "red";
    optionalexpensesBtn.style.background = "red";
    countBtn.style.background = "red";



let money, time;


idStart.addEventListener("click", function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    
    while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.timeData = time;
    appData.budget = money;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    countBtn.disabled = false;
    countBtn.style.background = "green";

    for (let i = 0; i < expensesItem.length; i++) {
        expensesItem[i].addEventListener("input", function() {
    if (expensesItem[0].value == "" || expensesItem[1].value == "" || expensesItem[2].value == "" || expensesItem[3].value == "") {
        expensesBtn.disabled = true;
        expensesBtn.style.background = "red";
    } else {
        expensesBtn.disabled = false;
        expensesBtn.style.background = "green"; 
    }
        });
    }

    for (let i = 0; i < optionalExpensesItem.length; i++) {
        optionalExpensesItem[i].addEventListener("input", function() { 
    if (optionalExpensesItem[i].value == "") { 
        optionalexpensesBtn.disabled = true;
        optionalexpensesBtn.style.background = "red";
} else {
    optionalexpensesBtn.disabled = false;
    optionalexpensesBtn.style.background = "green"; 
}
    });
}
});

let sum = 0;

expensesBtn.addEventListener("click", function() {

    for (let i = 0; i < expensesItem.length; i++) {
        let spending1 = expensesItem[i].value,
            willCost1 = expensesItem[++i].value;
        if ( (typeof(spending1)) === "string" && (typeof(spending1)) != null && (typeof(willCost1)) != null && spending1 != "" && willCost1 != "" && spending1.length < 50) {
            console.log("Done!");
            appData.expenses[spending1] = willCost1;
            sum += +willCost1;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;

});

countBtn.addEventListener("click", function() {

    if (appData.budget != undefined) {


        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка.";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка.";
        } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Высокий уровень достатка.";
        }	else {
            levelValue.textContent = "Произошла ошибка";
        }
    }   else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

optionalexpensesBtn.addEventListener("click", function() {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let number1 = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = number1;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
	}
});

incomeItem.addEventListener("input", function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener("input", function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
            
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});

percentValue.addEventListener("input", function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
            
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
    };
    

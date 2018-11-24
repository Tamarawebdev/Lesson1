"use strict";

let idStart = document.getElementById("#start"),
    classAndValue = document.querySelectorAll(".budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value"),
    expensesClass = document.getElementsByClassName(".expenses-item"),
    expensesBtn = document.getElementsByTagName("button"),
    countBtn = document.getElementsByTagName("button"),
    optionalExpensesClass = document.getElementsByClassName(".optionalexpenses-item"),
    incomeId = document.getElementById("#income"),
    savingsId =document.getElementById("#savings"),
    sumId = document.getElementById("#sum"),
    percentId = document.getElementById("#percent"),
    yearClass = document.getElementsByClassName(".year"),
    monthClass = document.getElementsByClassName(".month"),
    dayClass = document.getElementsByClassName(".day");


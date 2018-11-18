"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {"": ""},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
	let spending1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
		willCost1 = prompt("Во сколько обойдется?", "");

	if ( (typeof(spending1)) === "string" && (typeof(spending1)) != null && (typeof(willCost1)) != null && spending1 != "" && willCost1 != "" && spending1.length < 50) {
		console.log("Done!");
		appData.expenses[spending1] = willCost1;
	} else {
        alert("Необходимо ввести статью и расход!");

        i = 0; // Если это не то что надо то спасите меня!
	};
};

/* === Пробовала и так ===

// outloop:
for (let i = 0; i < 2; i++) {
	let spending1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
			willCost1 = prompt("Во сколько обойдется?", "");
	if ( (typeof(spending1)) === "string" && (typeof(spending1)) != null && (typeof(willCost1)) != null && spending1 != "" && willCost1 != "" && spending1.length < 50) {
			console.log("Done!");
			appData.expenses[spending1] = willCost1; //Объекты как ассоциативные массивы https://learn.javascript.ru/object
			//continue outloop; // Задает вопросы как обычно и продолжает.
			//break outloop; // В Данном случае делает то же самое что и continue.
	} else if (i = 0 i < 2 i++) {
			alert("Необходимо ввести статью и расход!");
			// i = 0; // Задает вопросы заново но только 1 раз.
			// i < 2; // Задает вопросы заново но после двух раз выходит из цикла и продолжает.
	};
};*/


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка.")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка.")
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка.")
}	else {
	console.log("Произошла ошибка")
};



/*
let i = 0;

while (i < 2) {
		let spending1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
			willCost1 = prompt("Во сколько обойдется?", "");
	if ( (typeof(spending1)) === "string" && (typeof(spending1)) != null && (typeof(willCost1)) != null && spending1 != "" && willCost1 != "" && spending1.length < 50) {
			console.log("Done!");
			appData.expenses[spending1] = willCost1;
	} else {
			console.log("Something went wrong! Try again!");
	}
  i++;
};*/

/*
let i = 0;

do {
		let spending1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
			willCost1 = prompt("Во сколько обойдется?", "");
	if ( (typeof(spending1)) === "string" && (typeof(spending1)) != null && (typeof(willCost1)) != null && spending1 != "" && willCost1 != "" && spending1.length < 50) {
			console.log("Done!");
			appData.expenses[spending1] = willCost1;
	} else {
			console.log("Something went wrong! Try again!");
	}
  i++;
} while (i < 2);*/


/* ===Так вообще возможно? Если да то что я сделала не так?===

for (let i = 0; i < 2; i++) {
	let spending1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
			willCost1 = prompt("Во сколько обойдется?", "");

		switch (spending1, willCost1) {
			case (typeof(spending1)) === "string":
					console.log("Done!");
					break;
			case (typeof(spending1)) != null:
					console.log("Done!");
					break;
			case (typeof(willCost1)) != null:
					console.log("Done!");
					break;
			case spending1 != "":
					console.log("Done!");
					break;
			case willCost1 != "":
					console.log("Done!");
					break;
			case spending1.length < 50:
					console.log("Done!");
					break;
			default:
			console.log("Something went wrong! Try again!");
		};
	};*/

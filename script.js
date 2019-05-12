'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let x1 = prompt("Введите обязательную статью расходов в этом месяце");
let y1 = prompt("Во сколько обойдется?");
let x2 = prompt("Введите обязательную статью расходов в этом месяце");
let y2 = prompt("Во сколько обойдется?");
let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        x1: y1,
        x2: y2
        },
    optionalExpenses: null,
    income: null,
    saving: false
};
let budget = appData.moneyData / 30;
alert( budget );
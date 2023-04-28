console.log('-*-*-*-*-* homework-01 -*-*-*-*-*');
let money = 60000; // Месячный бюджет
let profit = "Фриланс"; // Cтрока с дополнительным доходом
let expendes = "Еда, Такси, Развлечения"; // Cтрока с дополнительными расходами через запятую
let purpose = "25000"; // Любое число (Какую сумму хотите накопить)
let period = 12; // число от 1 до 12 (месяцев)

console.log(typeof money, typeof profit)
console.log(expendes.length)
console.log(`Период равен ${period}-ти месяцам`);
console.log(`Цель заработать ${purpose} рублей`);
let budgetDay = money / 30;

console.log(budgetDay);

/*
homework-01_hard
*/

console.log('>>>>>>>> homework-01_hard <<<<<<<<<<');

let expendes_lc = expendes.toLowerCase()
let arr_expendes = expendes_lc.split(', ');
console.log(arr_expendes);
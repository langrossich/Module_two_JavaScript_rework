let = oneNumber = prompt('Введите первое число');
let = twoNumber = prompt('Введите второе число');

oneNumber = parseInt(oneNumber);
twoNumber = parseInt(twoNumber);

// Выводим в консоль

console.log (oneNumber + twoNumber);

console.log(oneNumber - twoNumber);

console.log(oneNumber / twoNumber);

console.log(oneNumber * twoNumber);

console.log(oneNumber % twoNumber);


// Выводим на страницу

let culc = oneNumber + twoNumber;

document.write(`<h2>Вывод на страницу</h2> <br>`);
document.write(`Сумма чисел = ${culc.toFixed(1)}; <br>`);

culc = oneNumber - twoNumber;
document.write(`Разность чисел = ${culc.toFixed(1)}; <br>`);

culc = oneNumber / twoNumber;
document.write(`Частность чисел = ${culc.toFixed(1)}; <br>`);

culc = oneNumber * twoNumber;
document.write(`Произведение чисел = ${culc.toFixed(1)}; <br>`);

culc = oneNumber % twoNumber
document.write(`Остаток от деления = ${culc.toFixed(2)}; <br><br>`);

document.write(`&#129335;`)
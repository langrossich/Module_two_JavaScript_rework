console.log("--------------------Инфа-----------------------");

let purpose = +prompt("Сумма, которую вы хотите накопить в рублях?")
console.log(`Сумма, которую хотят накопить - ${purpose}`)

let money = +prompt("Ваш емесячный доход?");
console.log(`Доход за месяц - ${money}`)

let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(`Как возможные расходы указали - ${expenses}`)

let amount = +prompt("Во сколько обойдуться обязательные статьи расходов?");
console.log(`Деньги, которые потратятся на обязательные расходы - ${amount}`)

let deposit = confirm("Есть ли у вас вклад в банке?");
console.log(`${deposit ? 'Наличие вклада: да' : 'Наличие вклада: нет'}`);

console.log("--------------------Расчет-----------------------");

let budgetMonth = money - amount;
console.log(`Бюджет на месяц равнен - ${budgetMonth}`);

let budgetDay = Math.floor(budgetMonth / 30);
console.log(`Ежедневные расходы составляют: ${budgetDay}`);

const months = Math.ceil(purpose / budgetMonth);
console.log(`Копить осталось ${months} месяц (-ев)`);

switch(true) {
    case budgetDay >= 6000 :
        console.log(`У Вас высокий уровень дохода`);
        break;
    case budgetDay >= 3000 :
        console.log(`У Вас средний уровень дохода`);
        break;
    case budgetDay >= 0 :
        console.log(`У Вас низкий уровень дохода`);
        break;        
    default :
        console.log(`Что-то пошло не так!`);
}
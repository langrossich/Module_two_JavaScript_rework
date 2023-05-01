// console.log("--------------------Инфа-----------------------");

// let purpose = +prompt("Сумма, которую вы хотите накопить в рублях?")
// console.log(`Сумма, которую хотят накопить - ${purpose}`)

// let money = +prompt("Ваш емесячный доход?");
// console.log(`Доход за месяц - ${money}`)

// let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
// console.log(`Как возможные расходы указали - ${expenses}`)

// let amount = +prompt("Во сколько обойдуться обязательные статьи расходов?");
// console.log(`Деньги, которые потратятся на обязательные расходы - ${amount}`)

// let deposit = confirm("Есть ли у вас вклад в банке?");
// console.log(`${deposit ? 'Наличие вклада: да' : 'Наличие вклада: нет'}`);

// console.log("--------------------Расчет-----------------------");

// let budgetMonth = money - amount;
// console.log(`Бюджет на месяц равнен - ${budgetMonth}`);

// let budgetDay = Math.floor(budgetMonth / 30);
// console.log(`Ежедневные расходы составляют: ${budgetDay}`);

// const months = Math.ceil(purpose / budgetMonth);
// console.log(`Копить осталось ${months} месяц (-ев)`);

// switch(true) {
//     case budgetDay >= 6000 :
//         console.log(`У Вас высокий уровень дохода`);
//         break;
//     case budgetDay >= 3000 :
//         console.log(`У Вас средний уровень дохода`);
//         break;
//     case budgetDay >= 0 :
//         console.log(`У Вас низкий уровень дохода`);
//         break;        
//     default :
//         console.log(`Что-то пошло не так!`);

// }

// Домашнее задание 05 (20)

const getAccumulatedIncome = (salary, extraMoney, requiredExpenses) =>
    (salary + extraMoney) - requiredExpenses; 

const getTargetMonth = (accumulatedIncome, purpose) => 
    Math.ceil(purpose / accumulatedIncome);

const init = () => {
    const salary = +prompt('Ваш месячный доход?');
        console.log(salary);

    const extraMoney = +prompt(`Назовите возможный доход за ваши дополнительные работы?`);
        console.log(extraMoney);

    const expensesCategories = prompt('Перечислите возможные расходы за рассчитываемый период через запятую (пример: "питание, проезд")?')
        .split(',').map((item) => {
        const trimmedtItem = item.trim();
        return `${ trimmedtItem[0].toLocaleUpperCase() }${ trimmedtItem.slice(1) }`});
        console.log(expensesCategories);

    const requiredExpenses = +prompt('Во сколько обойдуться обязательные статьи расходов?');
        console.log(requiredExpenses);

    const accumulatedIncome = getAccumulatedIncome(salary, extraMoney, requiredExpenses);

    const purpose = +prompt('Сколько вы хотите накопить?');
        console.log(purpose);

    const months = getTargetMonth(accumulatedIncome, purpose);
        console.log(`Копить осталось ${months} месяц (-ев)`);
    
    const budgetPerDay = accumulatedIncome / 30;

    if (budgetPerDay >= 6000) {
        console.log(`Высокий уровень дохода`);
    } else if (budgetPerDay < 6000 && budgetPerDay >= 3000) {
        console.log(`Средний уровень дохода`);
    } else if (budgetPerDay < 3000 && budgetPerDay >= 0) {
        console.log(`Средний уровень дохода`);
    } else {
        console.log(`Что-то пошло не так!`);
    }    

    console.clear;

    console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет: ${accumulatedIncome}. Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ${months} месяца (-ев). Дневной бюджет: ${budgetPerDay}`);
};

init();

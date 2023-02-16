function expenseCalculate(inputId) {
    const getElement = parseInt(document.getElementById(inputId).value);
    return getElement;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodValue = expenseCalculate('Food-field')
    const rentValue = expenseCalculate('Rent-field');
    const clothesValue = expenseCalculate('Clothes-field');

    const expense = foodValue + rentValue + clothesValue;

    const expensesAmount = document.getElementById('expenses-amount');
    expensesAmount.innerText = expense;

})
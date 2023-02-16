function expenseField(foodValue, rentValue, clothesValue, incomeValue) {
    const expense = foodValue + rentValue + clothesValue;
    const expensesAmount = getElements('expenses-amount');
    const balance = getElements('remaining-balance')
    if (incomeValue > expense && foodValue>=0 && rentValue>=0 && clothesValue>=0 && incomeValue>=0) {
        expensesAmount.innerText = expense;
        const remainingAmount = incomeValue - expense;
        balance.innerText = remainingAmount;
    }
    else {
        alert('invalid input')
    }
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodValue = getElementValueInt('Food-field')
    const rentValue = getElementValueInt('Rent-field');
    const clothesValue = getElementValueInt('Clothes-field');
    const incomeValue = getElementValueInt('income-field');
    expenseField(foodValue, rentValue, clothesValue, incomeValue);
});
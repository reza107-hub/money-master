function expenseField(foodValue, rentValue, clothesValue, incomeValue) {
    const expense = foodValue + rentValue + clothesValue;
    const expensesAmount = getElements('expenses-amount');
    expensesAmount.innerText = '';
    const balance = getElements('remaining-balance')
    balance.innerText = '';
    if (incomeValue > expense) {
        if (foodValue >= 0 && rentValue >= 0 && clothesValue >= 0 && incomeValue >= 0) {
            expensesAmount.innerText = expense;
            const remainingAmount = incomeValue - expense;
            balance.innerText = remainingAmount;
        } else{
            alert('wrong input')
        }
    }
    else {
        alert('No income')
    }
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodValue = getElementValueInt('Food-field')
    const rentValue = getElementValueInt('Rent-field');
    const clothesValue = getElementValueInt('Clothes-field');
    const incomeValue = getElementValueInt('income-field');
    expenseField(foodValue, rentValue, clothesValue, incomeValue);
});
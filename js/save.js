document.getElementById('save-btn').addEventListener('click', function(){
    const income = getElementValueInt('income-field');
    const savingPercentage = getElementValueInt('saving-percentage');
    const savingAmount = (income * (savingPercentage/100));
    
    const savingAmountStr = getElements('saving-amount');
    savingAmountStr.innerText = savingAmount;

    const balance = getElements('remaining-balance');
    const remainingBalance = getElements('remaining-bal-after-saving');
    if (parseInt(balance.innerText) > savingAmount){
        remainingBalance.innerText = parseInt(balance.innerText) - savingAmount;
    } else {
        remainingBalance.innerText = 'no saving';
    }
})
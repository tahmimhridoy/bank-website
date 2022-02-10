document.getElementById('deposit-button').addEventListener('click', function(){
    
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance after deposit
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    // clear input after deposit
    depositInput.value = '';
})


// withdraw calculation
document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmout = parseFloat(withdrawAmountText);
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmout;

    // update current balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmout;

    // clear input after withdraw
    withdrawInput.value = '';
})
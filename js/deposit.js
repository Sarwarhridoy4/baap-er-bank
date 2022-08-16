//Adding event listener to button deposit
document.getElementById('btn-deposit').addEventListener('click',function(){
//get the deposit amount from the user deposit input field
const depositField = document.getElementById('user-deposit');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);
//NaN Validation
if(isNaN(newDepositAmount)){
    alert('Invalid Input Type!Enter a correct number.');
    return;
  }
// get the current deposit total
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

const currentDeposittotal = previousDepositTotal + newDepositAmount;

depositTotalElement.innerText = currentDeposittotal;
//get the ballance current total
const ballanceTotalElement = document.getElementById('balance-total');
const previousBalnceTotalString = ballanceTotalElement.innerText;
const previousBalnceTotal = parseFloat(previousBalnceTotalString);
//calculate the current Total Ballaance
const currentTotalBalance = previousBalnceTotal + newDepositAmount;
// set corresponding value to ballenceTotal Element
ballanceTotalElement.innerText = currentTotalBalance;
//reset deposit input field
depositField.value = '';
})
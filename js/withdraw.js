// Add event Handler to btn-withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //get the withdraw amount
  const withdrawField = document.getElementById("user-withdraw");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //NaN validation
  if(isNaN(newWithdrawAmount)){
    alert('Invalid Input Type!Enter a correct number.');
    return;
  }
  //withdraw total calcutation
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //clear input field
  withdrawField.value = "";

  //get the scource
  const ballanceTotalElement = document.getElementById("balance-total");
  const ballanceTotalElementString = ballanceTotalElement.innerText;
  const previousBallanceTotal = parseFloat(ballanceTotalElementString);
  // validation
  if (newWithdrawAmount > previousBallanceTotal) {
    alert("Baap er Bank e Eto Taka Nai!");
    return;
  }

  //calculate total withdraw
  const currentEWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  //assign the value of currentWithdrawTotal as the innerText of withdrawTotalElement
  withdrawTotalElement.innerText = currentEWithdrawTotal;

  //calculate current balance
  const currentBalance = previousBallanceTotal - newWithdrawAmount;

  // assign value in ballenceElement
  ballanceTotalElement.innerText = currentBalance;
});

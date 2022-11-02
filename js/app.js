var prev;
var bill;
var tip;
var num;
var tipAmount;
var total;

function clickedBtn(e) {
  if (prev != undefined) prev.className = 'tipBtn';
  e.className = 'tipBtnClicked';
  prev = e;
  var clickedTip = e.value;
  tip = parseInt(clickedTip);
}
function CheckInput(e, err) {
  if (e.value.length == 0 || e.value[0] == 0) {
    err.style.display = 'block';
    e.className = 'billInputInvalid';
    return false;
  } else {
    err.style.display = 'none';
    e.className = 'billInput';
    return true;
  }
}

function CheckAllInput() {
  var checkInput = CheckInput(
    document.getElementById('billId'),
    document.getElementById('billError')
  );
  var checkInput2 = CheckInput(
    document.getElementById('numId'),
    document.getElementById('peopleError')
  );
  var tipCheck = prev != undefined;

  if (checkInput == true && checkInput2 == true && tipCheck == true) {
    return true;
  } else {
    return false;
  }
}

function checker(e) {
  CheckInput(e, document.getElementById('billError'));
  bill = parseInt(document.getElementById('billId').value);

  if (CheckAllInput()) {
    Check();
  }
}

function checkerNum(e) {
  let x = CheckInput(e, document.getElementById('peopleError'));
  num = parseInt(document.getElementById('numId').value);

  if (CheckAllInput()) {
    Check();
  }
}

function Check() {
  tipAmount = (bill * tip) / 100;
  tipAmountNum = tipAmount / num;

  console.log(tipAmount);
  document.getElementById('tipAmount').innerHTML =
    '$' + tipAmountNum.toFixed(2);

  total = (bill + tipAmount) / num;

  document.getElementById('total').innerHTML = '$' + total.toFixed(2);

  console.log(total);
}

function reset() {
  document.getElementById('tipAmount').innerHTML = '$0.00';
  document.getElementById('total').innerHTML = '$0.00';
  document.getElementById('billId').value = '';
  document.getElementById('numId').value = '';
}

/**
 * Declare Variable
 */
const loginId = document.getElementById('login');
const addDeposit = document.getElementById('addDeposit');
/**
 * Login Button Handler
 */
loginId.addEventListener('click', function(e) {
  e.preventDefault();

  const loginArea = document.getElementById('login-area');
  const transArea = document.getElementById('transaction-area');
  const name = document.getElementById('name');
  const user = document.getElementById('user');

  loginArea.style.display = 'none';
  transArea.style.display = 'block';
  user.innerHTML = `Welcome <strong>${name.value}</strong>`;
});

/**
 * Deposit Button Handler
 */

addDeposit.addEventListener('click', function() {
  const depositNumber = getInputNumber('depositAmount');

  updateSpanText('currentDeposit', depositNumber);

  document.getElementById('depositAmount').value = '';

  updateSpanText('currentBalance', depositNumber);
});

/**
 * Withdraw Handler
 */

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function() {
  const withdrawAmount = getInputNumber('withdrawAmount');

  updateSpanText('currentWithdraw', withdrawAmount);
  updateSpanText('currentBalance', -1 * withdrawAmount);

  document.getElementById('withdrawAmount').value = '';
});

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const number = parseFloat(amount);

  return number;
}

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumb = parseFloat(current);
  const total = currentNumb + depositNumber;
  document.getElementById(id).innerText = total;
}

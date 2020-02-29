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
  const depositAmount = document.getElementById('depositAmount').value;
  const depositNumber = parseFloat(depositAmount);

  // const currentDeposit = document.getElementById('currentDeposit').innerText;
  // const currentDepositNumb = parseFloat(currentDeposit);
  // const totalDeposit = depositNumber + currentDepositNumb;
  // document.getElementById('currentDeposit').innerText = totalDeposit;

  updateSpanText('currentDeposit', depositNumber);

  document.getElementById('depositAmount').value = '';

  updateSpanText('currentBalance', depositNumber);
});

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumb = parseFloat(current);
  const total = currentNumb + depositNumber;
  document.getElementById(id).innerText = total;
}

// https://calculator.swiftutors.com/declining-balance-depreciation-calculator.html

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const necessitiesRadio = document.getElementById('necessitiesRadio');
const wantsRadio = document.getElementById('wantsRadio');
const savingsRadio = document.getElementById('savingsRadio');

let monthlyaftertaxincome = v;

btn.addEventListener('click', function() {
  
  if(necessitiesRadio.checked)
    result.textContent = `Necessities = ${computeNecessities().toFixed(2)}`;

  else if(wantsRadio.checked)
    result.textContent = `Wants = ${computeWants().toFixed(2)}`;

  else if(savingsRadio.checked)
    result.textContent = `Savings = ${computeSavings().toFixed(2)}`;
})

// calculation

function computeNecessities() {
  return Number(monthlyaftertaxincome.value) * 0.5;
}

function computeWants() {
  return Number(monthlyaftertaxincome.value) * 0.3;
}

function computeSavings() {
  return Number(monthlyaftertaxincome.value) * 0.2;
}
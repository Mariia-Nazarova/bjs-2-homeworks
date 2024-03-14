"use strict"
function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  
  let r1;
  let r2;

  if (d > 0) {
    r1 = (-b + Math.sqrt(d)) / (2 * a);    r2 = (-b - Math.sqrt(d)) / (2 * a);
    let arr = [r1,r2];
    console.log(arr);
  }

  else 
  if (d == 0) {
    r1 = r2 = -b / (2 * a);
    let arr = [r1];
    console.log(arr);
  }

  else {
      console.log([]);
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution; // тело кредита = сумма кредита - первоначальный взнос
  let P = percent / 100 / 12; // процентная ставка
  let n = countMonths; // количество месяцев
  let payment = S * (P + P / ((1 + P) ** n - 1));
  // ежемесячный платёж, где S — тело кредита, P — 1/12 процентной ставки (от 0 до 1), n - количество месяцев
  console.log(parseFloat(payment * n).toFixed(2));
}
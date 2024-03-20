"use strict";
function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;

  let r1;
  let r2;

  if (d > 0) {
    r1 = (-b + Math.sqrt(d)) / (2 * a);
    r2 = (-b - Math.sqrt(d)) / (2 * a);
    let arr = [r1, r2];
    return arr;
  } else if (d == 0) {
    r1 = r2 = -b / (2 * a);
    let arr = [r1];
    return arr;
  } else {
    return [];
  }
}
console.log(solveEquation(1, 5, 4));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 2, 10));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution; // тело кредита = сумма кредита - первоначальный взнос
  let P = percent / 100 / 12; // процентная ставка
  let n = countMonths; // количество месяцев
  let payment = S * (P + P / ((1 + P) ** n - 1));
  // ежемесячный платёж, где S — тело кредита, P — 1/12 процентной ставки (от 0 до 1), n - количество месяцев
  let finalPayment = parseFloat(payment * n).toFixed(2);
  return finalPayment;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 20000, 20000, 48));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));

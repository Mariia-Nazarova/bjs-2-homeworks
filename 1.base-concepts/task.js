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

}


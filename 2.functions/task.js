"use strict";

///////////////////////////ДОМАШКА №2.1///////////////////////////

// Написать функцию getArrayParams(...arr), которая получает на вход числа, а возвращает минимальное, максимальное и среднее арифметическое значений массива. Используйте rest-параметр для получения произвольного количества аргументов.
function getArrayParams(...arr) {
  let min = Infinity; 
  let max = -Infinity; 
  let sum = 0;

    for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  const avg = +(sum / arr.length).toFixed(2); 
  return { max: max, min: min, avg: avg };
}


///////////////////////////ДОМАШКА №2.2///////////////////////////

//Представьте, что у вас есть мясорубка с разными насадками. Мясорубка запускает действие, а сам процесс зависит от того, какая будет насадка. Затем мясорубка применяет насадку ко всему мясу, которое в неё поступает, и выдаёт на выход только самый лучший кусок. Используйте rest-параметр для получения произвольного количества аргументов в каждой насадке. 
//У мясорубки есть несколько насадок-преобразователей:насадка суммирования элементов;насадка вычисления разницы максимального и минимального элементов;насадка вычисления разницы сумм чётных и нечётных элементов;насадка вычисления среднего значения чётных элементов.

// Напишите функцию summElementsWorker, которая должна находить сумму элементов массива и возвращать её. Суммирование элементов можно реализовать аналогично первому заданию c помощью цикла или метода reduce.
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0; //*внесем дополнительно условие, что если положим нулевой массив, то будет возвращаться ноль
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Напишите функцию differenceMaxMinWorker для вычисления разницы максимального и минимального элементов.
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0; 
  let max = arr[0]; //в данном случае используем второй подход и положим первый элемент массива в max и min
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

// Напишите функцию differenceEvenOddWorker вычисления разницы сумм чётных и нечётных элементов.
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEvenElement = 0; // *задаем чётную 
  let sumOddElement = 0; // *задаем нечётную 
  
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) { //*ФИЛЬТРАЦИЯ ЧЕТНОГО ОТ НЕЧЕТНОГО - искать четные/нечетные будем через деление, если остаток 0, то четное
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement; 
}

// Напишите функцию averageEvenElementsWorker, которая будет вычислять среднее значение чётных элементов.
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0; //сумма четных
  let countEvenElement = 0; //счётчик четных
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
      countEvenElement++; 
    }
  }
  if (countEvenElement === 0) return 0;
    return +(sumEvenElement / countEvenElement).toFixed(2); 
}


///////////////////////////ДОМАШКА №2.3///////////////////////////
//Напишите функцию makeWork, которая из массива данных и насадки будет возвращать максимальный результат функции насадки.
//Функция makeWork принимает два аргумента: arrOfArr и func. В первом аргументе arrOfArr это массив массивов, т.е. например [[1,2,3][1,4,5]]. Вторым аргументом некая функция, которую мы будем использовать и которая в предыдущей задачке уже была задана

function makeWork(arrOfArr, func) { //
 
  let maxWorkerResult = -Infinity; 

  for (let i = 0; i < arrOfArr.length; i++) {

    const result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult; 
}


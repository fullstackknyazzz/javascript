// Задание 1
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

if (num1 <= 1 && num2 >= 3) {
    console.log("Условие выполняется");
} else {
    console.log("Условие не выполняется");
}

// Задание 2
let test = true;
console.log(test === true ? '+++' : '---');

// Задание 3
let day = parseInt(prompt("Введите число от 1 до 31:"));
if (day >= 1 && day <= 10) {
    console.log("Число находится в первой декаде месяца");
} else if (day >= 11 && day <= 20) {
    console.log("Число находится во второй декаде месяца");
} else if (day >= 21 && day <= 31) {
    console.log("Число находится в третьей декаде месяца");
} else {
    console.log("Некорректное число");
}

// Задание 4
let number = parseInt(prompt("Введите целое положительное число:"));
let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let units = number % 10;

console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);

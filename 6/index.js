// Задание 1
function cubeSum() {
    let result = Math.pow(2, 3) + Math.pow(3, 3);
    console.log(result);
}

cubeSum(); // Вывод: 35

// Задание 2
function calculateSalary() {
    let input = prompt('Введите число:');
    let number = parseFloat(input);

    if (isNaN(number)) {
        console.log('Значение задано неверно');
        return;
    }

    let salary = number * 0.87; // 100% - 13%
    console.log(`Размер заработной платы за вычетом налогов равен ${salary}`);
}

calculateSalary();

// Задание 3
function maxNumber(a, b, c) {
    return Math.max(a, b, c);
}

let num1 = parseFloat(prompt('Введите первое число:'));
let num2 = parseFloat(prompt('Введите второе число:'));
let num3 = parseFloat(prompt('Введите третье число:'));

console.log(`Максимальное значение: ${maxNumber(num1, num2, num3)}`);

// Задание 4
function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a > b ? a - b : b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль невозможно';
}

console.log(sum(2, 6)); // Вывод: 8
console.log(difference(6, 2)); // Вывод: 4
console.log(multiply(2, 6)); // Вывод: 12
console.log(divide(6, 2)); // Вывод: 3
console.log(divide(6, 0)); // Вывод: 'Деление на ноль невозможно'

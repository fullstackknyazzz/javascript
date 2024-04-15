// Задание 1
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} – это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} – четное число`);
    } else {
        console.log(`${i} – нечетное число`);
    }
}

// Задание 2
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 1); // Удаляем элемент с индексом 3
console.log(arr); // Вывод: [1, 2, 3, 6, 7]

// Задание 3
let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 10)); // Генерация случайного числа от 0 до 9
}

console.log(`Массив: ${randomArray}`);
console.log(`Сумма элементов: ${randomArray.reduce((acc, curr) => acc + curr, 0)}`);
console.log(`Минимальное число: ${Math.min(...randomArray)}`);
console.log(`Есть ли число 3: ${randomArray.includes(3) ? 'Да' : 'Нет'}`);

// Необязательное задание
for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}

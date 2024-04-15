// Задание 1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

for (let key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

// Задание 2
const post = {
    author: "John",
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2,
            },
        },
        {
            userId: 5,
            userName: "Jane",
            text: "lorem ipsum 2",
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(product => {
    product.price *= 0.85; // Уменьшаем цену на 15%
});

console.log(products);

// Задание 4
// Пункт 1
const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log(productsWithPhotos);

// Пункт 2
const sortedProducts = products.sort((a, b) => a.price - b.price);
console.log(sortedProducts);

// Задание 5
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const days = {};

en.forEach((day, index) => {
    days[day] = ru[index];
});

console.log(days);

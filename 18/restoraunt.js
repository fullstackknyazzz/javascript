s
const chefs = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"]
]);


const dishes = new Map([
    ["Пицца Маргарита", "Виктор"],
    ["Пицца Пепперони", "Виктор"],
    ["Суши Филадельфия", "Ольга"],
    ["Суши Калифорния", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);


const client1 = { name: "Алексей" };
const client2 = { name: "Мария" };
const client3 = { name: "Ирина" };


const orders = new Map();


orders.set(client1, ["Пицца Пепперони", "Тирамису"]);
orders.set(client2, ["Суши Калифорния", "Пицца Маргарита"]);
orders.set(client3, ["Чизкейк"]);


function printOrders(client) {
    const clientOrders = orders.get(client);
    if (clientOrders) {
        console.log(`Заказы клиента ${client.name}:`);
        for (const dish of clientOrders) {
            const chef = dishes.get(dish);
            console.log(`  ${dish} - повар: ${chef}`);
        }
    } else {
        console.log(`У клиента ${client.name} нет заказов.`);
    }
}


printOrders(client1);
printOrders(client2);
printOrders(client3);

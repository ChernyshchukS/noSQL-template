// Использовал следующую книгу для написания
// Янг А., Мек Б., Кантелон М.
// Node.js в действии. 2-е изд. — СПб.: Питер, 2018. — 432 с
// код из книги можно загрузить здесь
// https://www.manning.com/books/node-js-in-action-second-edition

// Автор книги Алекс Янг
// Алекс — веб-разработчик, живущий в Лондоне; автор книги Node.js in Practice
// (Manning, 2014). Алекс ведет популярный блог DailyJS по тематике JavaScript.
// В настоящее время работает на Sky старшим разработчиком для NOW TV. Он есть
// на GitHub (https://github.com/alexyoung) и в Twitter (@alex_young).

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Express веб приложение на localhost:3000');
});
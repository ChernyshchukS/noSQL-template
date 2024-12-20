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
const cors = require('cors');
const functionOne = require('./functions/functionOne');

const app = express();
app.use(express.json());
app.use(cors()); // разрешаем CORS всех запросов
app.get('/', async (req, res, next) => {
    // параметр, если понадобится
    const id = req.params.id;
    console.log('Функция запустилась');
    try {
        const result =  {
            message: 'Сообщение о выполнении задания lab.',
            firstParameter: 'lab первый параметр',
            secondParameter: 'lab второй параметр',
        };
        if (result.error) {
            return res.status(500).json({error: result.error});
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({message: 'Ошибка выполнения задания.', error: err.message});
    }
});
app.get('/lab00function01/:id', async (req, res, next) => {
    // параметр, если понадобится
    const id = req.params.id;
    console.log(`Функция запустилась с параметром ${id}`);
    try {
        const result =  await functionOne(id);
        if (result.error) {
            return res.status(500).json({error: result.error});
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({message: 'Ошибка выполнения задания.', error: err.message});
    }
});
app.set('port', process.env.Node_PORT);
app.listen(app.get('port'), () => {
    console.log(`Express веб приложение в Docker и на localhost:${app.get('port')}`);
});

module.exports = app;
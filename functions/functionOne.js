const {MongoClient} = require('mongodb');
const {faker} = require('@faker-js/faker'); // пакет для генерации случайных данных
// необходимо для подключения параметров из файла .env
require('dotenv').config();
const client = new MongoClient(process.env.MONGO_URI);
async function demoFunctionOne(param01) {
    let result = {};
    let message = '';
    try {
        await client.connect();
        console.log('Подключение к серверу выполнено');
        message += `<p>Подключение к серверу выполнено</p>`;

        const db = client.db('lab-start');
        console.log('Подключение к базе выполнено');
        message += `<p>Подключение к базе выполнено</p>`;

        const collection = db.collection('students');
        console.log('Подключение к коллекции выполнено');
        message += `<p>Подключение к коллекции выполнено</p>`;

        const isExistCollection = await collection.countDocuments();
        console.log(`В коллекции было ${isExistCollection} записей`);
        message += `<p>В коллекции было ${isExistCollection} записей</p>`;

        // if (isExistCollection > 0) {
        //     // Удаление коллекции, если она существует
        //     const isDeleteCollection = await collection.drop();
        //     console.log('Удалена существующая коллекция', JSON.stringify(isDeleteCollection));
        // }

        // Начало измерения времени
        const start = performance.now();
        for (let i = 0; i < param01; i++) {
            const coursesCount = Math.floor(Math.random() * 5) + 1; // От 1 до 5 курсов
            const courses = Array.from({ length: coursesCount }, () => ({
                name: faker.word.words(2),
                nameCourse: faker.science.unit(),
                room: faker.number.romanNumeral(),
                lastName: faker.person.lastName()
            }));

            const document = {
                index: i,
                isActive: Math.random() < 0.5,
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                gender: Math.random() < 0.5 ? 'male' : 'female',
                birthday: faker.date.between(
                    { from: '2002-01-01T00:00:00.000Z',
                        to: '2004-01-01T00:00:00.000Z' }).toISOString(),
                courses: courses,
            };

            await collection.insertOne(document);

            if (i % 1000 === 0) {
                console.log(`${i} документов добавлено...`);
            }
        }
        // Конец измерения времени
        const end = performance.now();
        console.log(`Потребовалось времени: ${(end - start).toFixed(2)} мс`);
        message += `<p>Потребовалось времени: ${(end - start).toFixed(2)} мс</p>`;

        const documentsInCollection = await collection.countDocuments();
        console.log(`Сейчас в коллекции ${documentsInCollection} записей.`);
        message += `<p>Сейчас в коллекции ${documentsInCollection} записей.</p>`;

        result = {
            message: `${message}`,
            firstParameter: `Время, затраченное на выполнение операции ${(end - start).toFixed(2)} мс`,
            secondParameter: `Сейчас в коллекции ${documentsInCollection} записей.`,
        };
    } catch (err) {
        result = { error: err.message };
    } finally {
        await client.close();
    }
    return result;
}

module.exports = demoFunctionOne;

# Шаблон для выполнения лабораторных работ по курсу noSQL
> **Note**: Вдохновлялся работой, которую [взял здесь](https://github.com/BovkunVS/WEB)
## В шаблоне создается три контейнера:
* NoSQL-mongo - контейнер базы данных mongoDB
* NoSQL-express - контейнер для работы с базой данных, которая расположена на сервере NoSQL-mongo
* NoSQL-node - контейнер с приложением, которое выполняет задания из лабораторной работы

![docker-containers](/images/docker-containers.png)

Mongo Express для работы с базами данных MongoDB

![mongo-express](/images/mongo-express.png)

Для интерактивного взаимодействия с приложением использовал статическую страницу

![web-index](/images/web-index.png)

Страницу [взял здесь](https://github.com/BovkunVS/WEB)
Код страницы находится в папке WEB.

## Для добавления нового задания необходимо віполнить следующие шаги:
* добавить описание задания в файл ./WEB/app.js
  ![app-js-add-item](/images/new-item-01-app-js.png)
* добавить обработку нажатия на кнопку
  ![app-js-add-item](/images/new-item-02-app-js.png)
* добавить обработку вызова в сервере
  ![app-js-add-item](/images/new-item-03-server-js.png)
* реализовать функцию, которая будет выполнять поставленное задание из лабораторной работы
  ![app-js-add-item](/images/new-item-04-function.png)
* в случае корректного завершения работы функция должна вернуть три параметра
  ![app-js-add-item](/images/new-item-05-function-return.png)

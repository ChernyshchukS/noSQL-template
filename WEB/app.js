// автор https://t.me/lime_txt
// автор https://github.com/BovkunVS/WEB
const tasks = [
  { id: 1, name: "Добавление случайных данных", description: "Добавление случайных данных в базу данных." },
  { id: 2, name: "Второе простое задание", description: "Описание второго простого задания" },
  { id: 3, name: "Третье простое задание", description: "Описание третьего простого задания" },
  { id: 4, name: "Четвертое простое задание", description: "Описание четвертого простого задания" },

];

// функция для отображения списка заданий
function loadTaskList() {
  const taskListElement = document.getElementById('taskList');
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.name;
    taskItem.addEventListener('click', () => loadTaskDetails(task.id));
    taskListElement.appendChild(taskItem);
  });
}

// функция для отображения деталей выбранного задания
function loadTaskDetails(taskId) {
  const task = tasks.find(t => t.id === taskId);
  const taskDetailsElement = document.getElementById('taskDetails');

  taskDetailsElement.innerHTML = `
    <h2>${task.name}</h2>
    <p><strong>Описание:</strong> ${task.description}</p>
    <button id="runTaskButton">Выполнить задание</button>
    <div id="resultOutput" style="margin-top: 20px;"></div>
  `;

  const runTaskButton = document.getElementById('runTaskButton');

  if (task.id === 1) {
    runTaskButton.addEventListener('click', () => {
      fetch('http://localhost:3000/lab00function01/1000')
        .then(response => response.json())
        .then(data => displayResult(data))
        .catch(err => handleError(err));
    });
  } else if (task.id === 2) {
    runTaskButton.addEventListener('click', () => {
      fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => displayResult(data))
        .catch(err => handleError(err));
    });
  } else if (task.id === 3) {
    runTaskButton.addEventListener('click', () => {
      fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => displayResult(data))
        .catch(err => handleError(err));
    });
  } else if (task.id === 4) {
    runTaskButton.addEventListener('click', () => {
      fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => displayResult(data))
      .catch(err => handleError(err));   
    });
  } else {
    runTaskButton.style.display = 'none';
  }
}

// функция для отображения результата
function displayResult(data) {
  document.getElementById('resultOutput').innerHTML = `
    <p><strong>Результат выполнения:</strong></p>
    <p>Текстовое сообщение: ${data.message}</p>
    <p>Первый параметр: ${data.firstParameter}</p>
    <p>Второй параметр: ${data.secondParameter}</p>
  `;
}

// функция для обработки ошибок
function handleError(err) {
  console.error(err);
  document.getElementById('resultOutput').innerHTML = `
    <p style="color: red;">Ошибка выполнения задания</p>
  `;
}

// загружаем список заданий во время загрузки
document.addEventListener('DOMContentLoaded', loadTaskList);

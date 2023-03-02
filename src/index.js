// ! ДЗ 49. Работа с webpack, git

// 1) Создать проект на webpack, webpack-cli, webpack-dev-server по видео текущего урока.
// 2) Создать массив с пользователями в файле data
// 3) Создать файлЫ с функциями которая выводит пользователей
//    на страницу ввиде списка из файла data.js:
//    id, name, age, email, country, company, birthday
// 4) Создать репозиторий на git и выгрузить туда проект

const container = document.getElementById("container");

async function getData() {
    const users = require('./data');
    console.log(users);
    users.forEach(item => {
        renderUser(item);
    })

};
getData();

function renderUser(user) {
    console.log(user);
    const box = document.createElement('div');
    box.classList.add("box");
    const infoUser = document.createElement('p').innerText = `Имя: ${user.name}, возраст: ${user.age},
    страна: ${user.country}, дата рождения: ${user.birthday}, email: ${user.email}, компания: ${user.company}`;

    box.append(infoUser);
    container.append(box);
};


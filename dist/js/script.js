'use strict';

//console.log(userName);

/*let year = prompt('Ты ебанутый баран?');

if (year == 'да') {
  alert( "Правильно!" );
  alert( "Вы такой умный!" );
} else if (year == 'нет'){
  alert("Попробуй напиши да");
} else{
  alert("неверный ответ!");
}*/

/*let year = prompt('Какое «официальное» название JavaScript?');

if (year == 'ECMAScript') {
  alert( "Верно!" );
} else{
  alert("Не знаете? ECMAScript!");
}*/

//Цыклы

/*for (let i = 2;i < 10; i++) {
  if(i % 2 == 0){
  alert(i);
  }
}*/

//остановка цикла
/*let num = 0;
for (; num < 5; num++) {
  console.log(num);
  if (num == 2) break;
};*/

//Прерывание цикла
/*let num = 0;
for (; num < 5; num++) {
  if (num == 2) continue;
  console.log(num);
};*/

//Возвращение функции

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('А родители разрешили?');
  }
}

let age = prompt('Сколько вам лет?', 18);

if (checkAge(age)) {
  alert('Доступ получен');
} else {
  alert('Доступ закрыт');
}*/

//стрелочная функция
/*let sum = function(a, b) {
  return a + b;
};

alert( sum(1, 2) );*/

//Короткая запись через стрелочную функцию

/*let sum = (a, b) => a + b;
alert( sum(1, 2) );*/

//Объекты
/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/

let btns = document.getElementsByClassName('glitch-btn');
let par = document.getElementsByClassName('popup');
let col = document.getElementsByClassName('popup_close');

btns[0].onclick = function() {
  par[0].classList.add("isVisible");
}
col[0].onclick = function() {
  par[0].classList.remove("isVisible");
}


// Задание 1 
let a = 10; 
alert(a);
a = 20;
alert(a);
// Задание 2
const year = 2007;
alert(`Год выпуска первого Iphone ${year}`);
// Задание 3\
let man = 'Brendon Eich';
alert(`Имя создателя языка JavaScript ${man}`);
// Задание 4
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);
// Задание 5
let number = 2;
let result = 2**5;
alert(result);
// Задание 6
let b = 9;
let c = 2;
alert(b%c);
// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
--num
++num
alert (num);
// Задание 8 
let age = prompt('Сколько Вам лет?');
let total = age;
alert(`Вам ${total} лет!`);
// Задание 9
const user ={
    name: 'Вася',
    age: 25,
    isAdmin: true
};
user["city of residence"] = 'Пенза';
user.age = 30;
delete user["city of residence"];
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);
// Задание 10
let userName = prompt('Как ваше имя?');
 alert(`Привет, ${userName}!`);
//  Домашнее задание №3

let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (password === userPassword)  {console.log("Пароль введен верно");

} else { console.log("Пароль введен неправильно");

}
// вариант 2
let password = 'пароль';
let userPassword = prompt('Введите пароль');
password === userPassword ? alert("Пароль введен верно") : alert("Пароль введен не верно");
//  задание 2
let c = 5;
if (c > 0 && c < 10) {console.log("Верно");

} else {console.log("Неверно");

}
// задачка 3 
let d = 55;
let e = 103;
if (d > 100 || e > 100) {console.log("Верно");

} else {console.log("Неверно");

}

// Задачка 4 
let a = ('2');
let b = ('3');
alert(Number(a) + Number(b));
// Вариант 2
let a = Number('2');
let b = Number('3');
alert(a + b);
// Задачка 5
let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Нет такого сезона');
        break;
}
// Задачка 7
let anyNumber = Number(prompt('Пожалуйста, введите любое число'));
if (!isNaN(anyNumber)) {
    if (anyNumber % 2 === 0) alert(`число ${anyNumber} четное`)
    else alert(`Число ${anyNumber} нечетное`)
}
else alert(`${anyNumber} -Это не число`)
// Задачка 8
let clientOS = Number(prompt('Введите для IOS - 0, Android - 1'));
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Введено не корректное значение');
}
// Задача 9

let clientOS = Number(prompt('Введите для IOS - 0, Android - 1'));
let clientDeviceYear = Number(prompt('Введите год выпуска'));
if (clientOS === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDeviceYear >= 2015) { console.log('Установите версию приложения для iOS по ссылке'); }
else if (clientOS === 1 && clientDeviceYear < 2015) { console.log('Установите облегченную версию приложения для Android по ссылке'); }
else if (clientOS === 1 && clientDeviceYear >= 2015) { console.log('Установите версию приложения для Android по ссылке'); }

else {
    console.log('Введено не корректное значение');

}




//
sum = (a, b) => a + b;
/* Эта стрелочная функция представляет собой более короткую форму:
let sum = function(a, b) {
return a + b;
};
*/
alert( sum(1, 2) );

//
let age = prompt("Сколько Вам лет?", 18);
let welcome = (age < 18) ?
() => alert('Привет!') :
() => alert("Здравствуйте!");
welcome();

/*
Замените код Function
Expression стрелочной функцией:*/

function ask(question, yes, no) {
if (confirm(question)) yes()
else no();
}

ask("Вы согласны?", 
()=> alert("Вы согласились."),
()=> alert("Вы отменили выполнение.")
);
//Используя оператор || (самый короткий вариант):
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
    };
    checkAge(2);

//Используя оператор ? :
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
    };
    checkAge(2);

//Функция min(a, b)
function checkMin(a, b) {
    if (a > b) {
    return b;
    } else {
    return a;
    }
    };
checkMin(6,5);

//Функция pow(x,n)
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
    result *= x;
    } return result;
};
let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
    } else {
    alert( pow(x, n) );
    };

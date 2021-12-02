var count = prompt('Сколько примеров хотите решать?');
var min = +prompt('Введите минимальное число');
var max = +prompt('Введите максмальное число');

function random(min,max){
    var rand = Math.floor(Math.random() * (max + 1 - min ) + min);
    return rand;
}

for(let i =1 ; i<=count ; i++){
    var a = +random(min,max);
    var b = +random(min,max);
    var sign = '';
    var math = +random(1,4);
    
    switch (math) {
        case 1:
            var sign = "+";
            var sum = a + b;
            break;
        case 2:
            var  sign = "-";
            var sum = a - b;
            break;
        case 3:
            var  sign = '*';
            var sum = a*b;
            break;
        case 4:
            var  sign = '/';
            var sum = a / b;
            break;
    
        default:
            break;
    }
    var ans = prompt(a + sign + b)
    if (ans == sum) {
        alert('Верно ваш ответ правильный - ' + ans)
    } else {
        alert('Ваш ответ не верный - ' + ans  +'! ' + "Правильный ответ - " + sum)
    }
}



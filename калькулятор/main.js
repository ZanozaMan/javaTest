//var num_1 = 5;
//var num_2 = 15;

//console.log("Вычисление: " + (num_1 + num_2));

//var num_3 = 5;
//num_3 --;
//console.log('Результат:' + num_3)

//var str_1 = Number('12');
//var str_2 = Number('2');
//console.log("Вычисление: " + (str_1 + str_2));


//console.log("Math: " + Math.PI); 
//console.log("Math: " + Math.E); 
//console.log("Math: " + Math.max(4, -5 ,3 ,1, 7)); 

//var number = 15;
//var isHasHouse = true;

//if(number == 15 && isHasHouse == true        )   {
    //console.log("ok");

//} else if(number < 10) {
    //console.log("ok1");
    
//} else if(number == 7) {
    //console.log("ok5");
        
//} else if(number >= 15) {
    //console.log("гооооол")
        
//} else { 

   // console.log("Error!");}

   //var stroka = "word";
   //switch(stroka) {
    //case "4": 
    //console.log("Переменная со значением 4");
    //break;
     //case "wor1d": 
    // console.log("Переменная со значением wor1d");
    //break;
    //default:
       // console.log("default")
  // }


//МАСИВЫ
 // var arr = [5, 3, 7, "stroka", true, 0 , 1 , -100];
//  arr[3] = false;
//console. log(arr.length);


//var matrix = [   ["cool", 100500, 300], [67.67, "stroka", "goooool"], [52, 69, 228]      ];

//matrix[1][2] = "durak"; 
//console.log(matrix);

//var man;
//var age = 40;
//var name = "Vlad";
//var cauntry = "Russia";

//console.log(age);




//for(var i = 0;  i < 10; i++) {
  //  console.log(i)

 /* var num_1 = 50;
  var num_2 = 100;
  var num_3 = 20;
  var num_4 = num_1 * num_2 - num_3;
  console.log(num_4);

  var pepe = [["big", 130, 100, 800], ["go", "man", 500], [1000, 2000, 3000]];
  pepe[2][1] = "четкий придурок";
  console.log(pepe);*/

 // var gang = 100;0
  //var pong = true;
  //if (gang == 100 && pong == false)  {
  //  console.log("все четко") 
//}
  //else if(gang = 110)(pong = ){
    //console.log("чет не четко")
  //} 
  //else if(pong = false){
   // console.log("пизда, не правда")
  //}
  //else if(gang >= 90){
  // console.log("ух ух ух ух, то что нужно")
  //}
//  else{
    //console.log("Пизда, ты все сломал!")
  //}

  //ОПЕРАТОРЫ ЦИКЛОВ

 /* for(var i = 100; i > 5; i /= 2){
    console.log(i);
}*/

/*var j = 1000;
while(j > 100){
  console.log(j)
 j-= 100;
}*/
/*
var isHasCar = true;
while(isHasCar == true){
  
}*/

/*
var k = 0;
do {
console.log(k)
k += 1;
} while(k < 10)*/


/*for (o = 10; o <= 20; o += 2){
  if(o > 15)
   break;
  console.log(o);
}*/

/*for (o = 10; o <= 20; o++){
 if(o % 2 == 0)
  continue;
  console.log(o);
}*/

//var arr = [5, 3, 1, 8, 0, true, "gogogog"];
//for(var i = 0; i < arr.length; i++){
  //console.log("Элемент " + (i + 1) + ":" + arr[i] );
//}



/*var balda = [5, 1 ,6, 0, -10, false, true, "gama gama"];
for(var i = 0; i < balda.length; i++){
  console.log("элемент " + (i + 1) + ":" + balda[i])
}*/


//ВСПЛЫВАЮЩИЕ ОКНА

//alert("Ты вонючка");
//var data = confirm("вы дома?");
//if (data) 
//  alert("ну и иди нахуй")

//var data = prompt("скажите скольк овам нужно орехов")
//console.log(data);

/*var prson = null;
if(confirm("ты один дома?")){
//prson = prompt("ихихихих, обернись)))")
alert ("ихихии, обернись");
} else{
  alert("ну и иди ты нахуй");
}*/


//ФУНКЦИИ
/*
function info(word){
  console.log(word + "Привет")
}



function summa(a, b){
var  res = a + b;
info(res)
}

summa(5, 7);*/


/*function summa(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++)
     sum += arr[i];
  console.log(sum);

  return sum;
}
var array = [1, 5, 9, 3];

var res = summa(array);

console.log("Результат: " + res);*/

//ЛОКАЛЬНАЯ И ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ 
/*var num = 20;

function info(){
  var num = 10;
  console.log(num);
}
info();

console.log(num);*/


/*let arr = ["gooo", "noooo", 120, "ipipippi", true, false];
arr[3] = "тупоооооооой"
console.log(arr);*/



//let matrix = [
  //[4, 6, 1], [7, 4, 2], [2, 6, 1]
//];
//matrix[2][1] = "vowwwwoo";
//console.log(matrix);


//СОБЫТИЯ

/*let coco = 0;

function pon(brr){
  coco++;
  brr.innerHTML = "а ты молодец " + coco;
  brr.style.background = "red";
brr.ctyle.color = "#333"

brr.style.cssText = "border-radius: 5px; border: 0; font-sixe: 20px"
  console.log(brr.value);



}




function poon(brr){
  console.log(brr.value);}*/


//УПРАВЛЕНИЙ HTML И ФОРМЫ 

/*let text = document.getElementById('text');
text.title = "New text";
console.log(text.title)


text.style.color = "blue";
text.style.backgroundColor = "red";

text.innerHTML = "Nwe<br>string";


//document.getElementById("text").style.color = "white"

//let spans = document.getElementsByTagName("span");

let spans = document.getElementsByClassName("simple-text");

for(let i = 0; i < spans.length; i++){
  console.log(spans[i].inner)}*/



//function checkForm(el){
 // console.log("Text")
  //return false;
//}

//console.log("")


/*let age = 12;
let parent = false;

if (age <= 11) {
  console.log("вход запрещен, вы слишком юны")
}
else if(age <= 13 && parent == true) {
  console.log("проход разрешён с родителями")
}
else if(age <= 13 && parent == false){
  console.log("проход без родителей запрещён")
}
else if (age >= 18) {
  console.log ("проходите")
}

for(let i = 0; i = 100; i * 2);
console.log(i);*/


// let s = "pepe";
// if (s === 'swaga'){
//   alert("нет, спаибо")
// }
// else if(s === 'pepe'){
//   alert("ооооооо даааааа")
// }
// else{
//   alert("no") 
// };




// let admin;
// let name;
// name = "john";
// admin = name;
// alert(admin);

// let Earth



// let age = prompt("сколько тебе лет?", 100);
// alert(`тебе ${age} лет!`);


// let nameUser = prompt("как тебя зовут?");
// alert (`тебя зовут ${nameUser}`);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b);


// let name = prompt("Какое официальное название JavaScript?");
// if(name == 'ECMAScript') {
//   alert("Верно!")
// } else if (name != "ECMAScript"){
//   alert("Не знаете? ECMAScript!")
// }

// let number = prompt("Введите число", "");
// if (number > 0) {
//   alert ("1")
// } else if (number < 0) {
//   alert ("-1")
// } else if (number == +0) {
//   alert ('0')
// }


// let result = (a + b < 4) ? "мало" : "много";



// let massage = (login == "Сотрудник") ? 'Привте!' :
// (login == "Директор") ? "Здравствуйте!" :
// (login == '') ? "Нет логина" :
// "";


// let age = prompt ("Введите возрост", +"") 

// if (age >= 14 && age <= 90) {
//   alert("yes")
// } else {
//   alert("no")
// }



// let age = prompt ("Введите возрост", +"") 

// if (!(age >= 14 && age <= 90)) {
//   alert("yes")
// } else {
//   alert("no")
// }

// let name = prompt ("Кто вы?");
// if (name === "Админ"){
//   let pass = prompt("пароль?", "")
  
//   if (pass === "Я главный"){
//     alert("Здравствствуйте!")
//   } else if (pass === "" || pass === null){
//     alert("Отменено")
//   } else {
//     alert("Не верный пароль")
//   }

// } else if (name === "" || name === null){
//   alert(" Отмена ебать")
// }else {
//    alert("Я хз кто ты!")
// }


// let num1 = 10,
//     num2 = 20,
//     result;

// result ??

// for (let num = 2; num <= 10; num++){
//   if (num % 2 == 0) {
//     alert(num);
//   }
// }

// let i = 0;
// while (i < 3){
//   alert(`number ${i}!`)
//   i++
// }

// let i;
// do {
//   i = prompt("Введите число больше 100!")
// } while (i <= 100 && i);
// if (i == false || i == "" || i == null) {
//   alert("Отмена!")
// } else if (i > 100){
//   alert("Спасибо большое!")
// }




// let sum = 0;
// let num
// while (true) {
//   num = +prompt("Ведите число ", "")
//   if (!num) break;
//   sum += num;
// } if (sum == 67) {
//   alert("ЫХХЫХЫХЫЫХ, СЫКС СЭВЫН")
// }
//   else if (sum == 200) {
//     alert("БЛЯЯЯЯ, МЕНЯ ШАМАН ЗА ДВУХСОТИЛ, ПИЗДААААААААААААААА")
//   } else 
//   {alert ("Сумма равна " + sum);}



//   for (let i = 0; i < 10; i++) {

//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }


// let browser = prompt('Какой увас браузер?')
// if (browser === "Edge") {
//   alert("You've got the Edge!")
// } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
//   alert("Okey, we suppord these browser too")
// } else {
//   alert('We hope that this page looks ok!')
// }

// let number = +prompt("Введите число от 0 и 3", '');
// switch (number){
//   case 0:
//     alert("вы ввели 0")
//     beeak;
//   case 1:
//     alert ("вы ввели 1")
//     break;
//   case 2:
//   case 3:
//     alert("вы вели 2, а может и 3")
//   break;
//  default:
//   alert("я таких чисел не просил вводить!!!")}




// let MyName = prompt("Как тебя зовут?");
// if (MyName) {
//   alert(`Hello ${MyName}`)
// } else if (MyName == ""){
//  MyName = prompt("Как тебя зовут та?") 
//     if (MyName) {
//       alert(`Так бы сразу ${MyName}`)
//     } else if (MyName == null){
//       alert("ну раз не хочешь.")
//     } else if (MyName == "") {
//       alert("ой, больно ты мне нужен!")
//     } 
//   } else if (MyName == null){
//     alert("ой, да иди ка ты нахуй, сука, заебал блядь")
//   }


// let ddd = confirm("ты молодец?");
// console.log(ddd)


// function checkAfe(age){
//   return (age > 18) ? true : confirm("Родители разрешили?")
// }



// function min(a, b){
//  return a < b ? b : a;
// }
// min(2, 5)


// function pow(x, n) {
//   let result = x;
//   result = x ** n

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n >= 1 && n % 1 == 0) {
//   alert( pow(x, n) );
// } else {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// }


// function shop(itoms, prise){
// let by = itoms;
// let sell = prise;
// let total = by * sell 
// total * 0.9
// return(total)
// }




// let age;
// alert("Здравствуйте!");
// alert("Вас приветствует Компания 'Острые чисночки");
// alert("Для продолжения введите свой возрост")
// age = +prompt("твой возрост?", "")
// if (age >= 18) {
//   alert("Добро пожаловать!")
// } else if (age == null || age == "") {
//   age = prompt("Пожалуйста, введите свой возраст!")
//   if (age >= 18) {
//     alert("Добро Пожаловать!")
//   } else if (age == null || age == ""){
//     alert("Ну, ладно")
//   } else {
//     alert("Извинте, вам сюда нельзя!")
//   }
// } else {
//   alert("Простите, вам нельзя войти")
// } 




// let age;
// alert("Здравствуйте!");
// alert("Вас приветствует Компания 'Острые чисночки");
// alert("Для продолжения введите свой возрост")
// age = +prompt("твой возрост?", "")
// if (age >= 18) {
//   alert("Добро пожаловать!")
// } else if (age == null || age == "") {
//   do {
//     age = prompt("Пожалуйста, введите свой возраст")
//   } while (!age);
//     if (age < 18) {
//       alert("Извинте, вам нельзя");
//     } else {
//       alert("Добро Пожаловать!!!!");
//     }
//   } else {
//   alert("Простите, вам нельзя войти")
// } 

// let 

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//     else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились!"),
//   () => alert("Вы отказались!")
// );


// function math(a, b){
//  return (a + b)
// }


// alert(math(+prompt("First num"),
// +prompt("Second num?")))

// function num(a){
  
//  if (a % 2 === 0) {
//   return "Четное";
//  } else {
//   return "Нечетное";
//  }
// }

// alert(
//   num(
//     +prompt("Введи число:")
//   ) 
// ) 



// let b = prompt("Введи число")
// function math(a){
//  for (a; a < b; a++) {
//   console.log(a)}
// }

//   math(1)


// function nums(a, b){
//   if(a > b) {
//     return a
//   } else {
//     return b 
//   }
// }

// alert(
//   nums(
//     +prompt("Введи перое Число"),
//     +prompt("Введи второе число")
//   )
// )



// function age(a){
//   if (a < 18){
//     alert("Доступ запрещен")
//   } else {
//     alert("Доступ Разрешен")
//   }
// } 

// age(
//   +prompt("Введите ствой возрост")
// )




// function nums(a, b, c){
//  return (a + b + c) / 3
// }

// alert(
// nums(
//   +prompt("Введите первое число"),
//   +prompt("Введите второе число"),
//   +prompt("Введите третие число")
// )
// )


// function temp(tempo){
//   return(tempo * 1.8) + 32
// }

// alert(
//   temp(
//     +prompt("Введите пожалуйста темперературу в Цельсиях")
//   )
// )



// function matrix(number){
//   let max = 0;
//   for (i = 0; i < number.length; i++)
//     if (number[i] > max) {
//       max = number[i]
//     } return max;
// }

// alert(
//   matrix(
//     prompt("Введите чсила через запятую").split(',').map(Number)
//   )
// )


// function strings(str){
//   let max = '';
//   for(i = 0; i < str.length; i++)
//     if(str[i].length > max.length){
//       max = str[i]
//     } return max;
// }

// alert(
//   strings(
//     prompt("Введите слова через запятую"). split(',').map(String)
//   )
// )
//document.getElementById('result').value = result;


function runProgram() {
  if(confirm("ВЫ ХОТИТЕ НАЧАТЬ ОТСЧЕТ ОТ 10????")) {
    for (let i = 10; i >= 0; i--){
      alert(i)
    } document.getElementById("feet").src="feet.jpg.jpg";
    } else {
      alert("Ну значит нет")
    }
}

function bigest() {
let num1 = +prompt("Введи первое число");
let num2 = +prompt("Введи второое число")

if (num1 > num2) {
  alert(`Число ${num1} больше чем число ${num2}!`)
} else if (num1 == num2) {
  alert(`Числа ${num1} и ${num2} РАВНЫЙ`)
} else {
  alert(`Число ${num2} больше чем число ${num1}!`)
} 
}

function umn() {
  let num1 = +prompt("Введи первое число");
  let num2 = +prompt("Введи второое число")

let nums = num1 * num2;
alert(`результат прщизведения ${nums}`)
}

function mathAref() {
  let num1 = +prompt("Введи первое число");
  let num2 = +prompt("Введи второое число")

let result = num1 + num2;
result = result / 2;
alert(`Среднее арифметическое ${result}`)
}

function del(a, b) {
  a = +prompt("Ввдеите первое чилсо"),
  b = +prompt("Введите второе число")
  result = a / b
  alert(`Ответ: ${result}`)
}

function plus() {
  let num1 = +prompt("Введите првое число");
  let num2 = +prompt("Введите второе число");
  let result = num1 + num2 ;
  alert(result);
}

function minus() {
  let num1 = +prompt("Введите перове число");
  let num2 = +prompt("Введите второе число");
  let result = num1 - num2;
  alert(result)
}

function ctep() {
  let num1 = +prompt("Введите число");
  let num2 = +prompt("Возвести в степень");
  let result = num1 ** num2;
  alert(result);
}

function mama() {
  confirm("ты думаешь твоя мама не шлюха?");
  let value = confirm("Ты уверен?")
  if (value == true) {
    alert("не, твоя мама шлюха ебаная блядь!")
  } else {
    alert("Даааа, твоя мамаша шлюха ебаная")
  }
}

/*
let amt = [];

while (true) {
  let userInput = prompt("Введите 4 значения (Для остановки введите 'стоп')")
  if (userInput === null || userInput === 'стоп') {
    break;
  } else if (amt.length >= 4) {
    alert("Можно ввести не больше 4 значений")
    continue;
  }
  amt.push(userInput);
}

function a() {
while (amt[0]) {
  console.log(amt[0])
  amt[0]--;
}
}

function b() {
while (amt[1]){
  console.log(amt[1]);
  amt[1]--;
}
}

function c() { 
while (amt[2]) {
  console.log(amt[2]);
  amt[2]--;
}
}

function d() {
while (amt[3]){
  console.log(amt[3])
  amt[3]--
}
}


let pepe = confirm("20 + 20 = 40");
  if (pepe == true) {
    alert("верно")
  } else {
    alert("Неверно")
  }


let lol = {
  name: "Valera",
  age: 18,
  Strona: "Rus"
}



console.log(lol.name, lol.age,)

*/

let data = {};

data.name = prompt("Введите имя");
data.surname = prompt("Введите фамилию");
data.age = +prompt("Введите возрост")

if (data.age < 18) {
  alert("Доступ запрещен")
  delete data.name
  delete data.age
  delete data.surname
} else {
  alert("Добро пожаловать")
} 

let key;

function now () {
  key = prompt("Что вы хотите узнать о пользователе?");
  if ( data[key] == undefined) {
    alert("Информации не найдено")
  } else {
    alert( data[key] )
  }
}



function gleb() {
  let result = confirm("хочешь увидеть АЛМАЗИК?????");
  if (result == true) {
    document.getElementById("image").src="image.png"
  } else {
    alert("Неееее, ты все ровно его увидешь)))");
    document.getElementById("image").src="image.png"
  }
}


function video() {
  let muuu = document.getElementById("huy");
  muuu.style.display = "block"; 
  muuu.src="huy.mp4";
  muuu.play(); 
}

function dis(){  
let a = +prompt("Введите первую переменную");
let b = +prompt("Введите вторую перменную");
let c = +prompt("Введите терьтю переменную")

let d = b**2 - 4 * a * c
alert(d)
if (d > 0) {
  alert("2 кореня")
} else if (d = 0) {
  alert("1 корень")
} else {
  alert("Нет коней")
}
}


function randon() {
  return Math.floor(Math.random1() * 1000) + 1;
}

console.log(randon());



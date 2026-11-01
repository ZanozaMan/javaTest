// let obj = {};

// obj.name = prompt("Ваше имя?");
// obj.age = +prompt("Ваш возраст?");
// obj.gmail = prompt("Ваш почта?");

// if (obj.age < 18) {
//   alert("Извините, доступ заперщен!")
//   delete ruletka(), dep(), superGame(), myDepozit(), superGame(), stav(), Black_Jack();
// } else {
//   alert("Добро пожаловать в КазикМазик!");
// }

const kaz = ["🍒", "🍋", "🍊", "⭐", "💎", "🔔"]
//const kaz = ["🍒", "🍋", "🍊", "⭐", "💎", "🔔", "🔥", "🎲", "💣"]

let prise = 0;

prise = +prompt("Введите сумму для начал крутки: ");

console.log(`Ваш Счет: ${prise}`);

function ruletka() {
  if (prise > 0) { 
  const rul1 = kaz[Math.floor(Math.random() * kaz.length)];
  const rul2 = kaz[Math.floor(Math.random() * kaz.length)];
  const rul3 = kaz[Math.floor(Math.random() * kaz.length)];

  console.log(`Результат: ${rul1} | ${rul2} | ${rul3}`)

  if (rul1 == rul2 && rul2 == rul3){
    console.log("Победа!")
    prise += 100;
  } else if (rul1 == rul2 || rul2 == rul3 || rul1 == rul3) {
    console.log("Два совпадения!")
    prise += 50;
  } else {
    console.log("Порожение")
    prise -= 50;
  }
  console.log(`Ваш счет: ${prise}`);

  if (prise <= 0) {
    alert("Игра окончина")
  }
 } else {
  console.log("Вы не можите крутить слоты!")
  console.log("Депн.. Ой, пополните баланс!")
 }
}
function dep() { 
if (prise >= 0 || prise <= 0) {
 let qus = confirm("Хотите ДЕПНУТЬ?????")
  if (qus == true) {
    let ques = +prompt("Сколько хотите ДЕПНУТЬ?")
    prise += ques
  } else if (qus == false) {
    console.log("Отмена Депа(");
  }
} else {
  console.log("Отмена Депа(");
  };
};

function superGame() {

  if (prise > 0) { 
  let qest = confirm("ВЫ ХОТИТЕ СЫГРАТЬ В СУПЕР-ИНРУ????")
  if (qest == true) {

    const two = ["💀", "⭐"]

    const krut1 = two[Math.floor(Math.random() * two.length)]
    const krut2 = two[Math.floor(Math.random() * two.length)]

    console.log(`РЕЗУЛЬТАТ: ${krut1} | ${krut2}`)

    if (krut1 == krut2) {
      alert("ПОБЕДА!!!");
      prise *= 2;
    } else {
      alert("ВЫ ПРОИГРАЛИ!");
      alert("ВАШ ДЕПОЗИТ СГОРЕЛ!!!");
      prise -= prise;
    }

  } else {
    alert("ТРУС!!!")
  }
} else if (prise <= 0) {
  console.log("Для начала Депните бабки")
}
};

function myDepozit() {
  console.log(`У вас на счету: ${prise}`)
};


function stav() {
  if (prise > 0) { 
  let stavka = +prompt("Какую ставку хотите поставить?")
  
  if (stavka) {
    prise - stavka

    let qes = +prompt("На сколько умножаете? (от 2 до 10)")
      if (qes < 2 || qes > 10) {
        alert("Вы ввели недоступную маржу")
      } else {
        stavka *= qes
        const two = ["💀", "⭐"]

    const krut1 = two[Math.floor(Math.random() * two.length)]
    const krut2 = two[Math.floor(Math.random() * two.length)]

    console.log(`Результат: ${krut1} | ${krut2}`)
    if (krut1 == krut2) {
      console.log("Победа")
      prise = prise + stavka
    } else {
      console.log("Порожение")
      prise = prise - stavka
    }
      }
  } else {
    console.log("Что то пошло не так")
  }
 } else {
  alert("Для начала пополните баланс!")
 }
};

function Black_Jack() {
  let shot = 0;
  let quest = confirm("Хотите сыграть в BLACK JACK")
  if (quest == true) {
    while (shot <= 21) {
      let quest = confirm("Взять карту?")
      if (quest == true) {
        const giveCard = Math.floor(Math.random() * 10) + 2
        shot += giveCard
        console.log(`Счет: ${shot}`)
      } else {
        console.log("Остановка")
        break
      }
    } if (shot > 21 || shot < 21) {
      console.log("Вы проиграли!")
    } else {
      console.log("Победа!")
    }
  } else {
    console.log("Отмена игры")
  }
}

function info() {
  let key = prompt("Что вы хотите узнать о пользователе?")
  if (key) {
    if (obj[key] == undefined) {
      alert("Ничего не найдено!")
    } else {
      alert(obj[key])
    }
  } else {
    alert("Что то пошло не так!")
  }
}

function DeleteAcount() {
  let q = confirm("Вы уверены что выхотите удалить аккаунт?")
  if (q == true) {
    delete obj.name, obj.age, obj.gmail;
    let q2 = confirm("Желаете создать новый аккаунт?")
    if (q2 == true) {
      obj.name = prompt("Ваше имя?");
      obj.age = +prompt("Ваш возраст?");
      obj.gmail = prompt("Ваш почта?");
    } else {
      alert("До встречи!")
    }
  } else {
    alert("Отмена")
  }
}


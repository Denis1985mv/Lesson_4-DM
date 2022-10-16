let velue = prompt("Введите баланс на закупку телефонов: ");
let velueCo = prompt("Сколько телефонов Вы хотите купить: ");
let velueBalanc = Number(velue);
let velueCount = Number(velueCo);

const velueTelephone = 50;
const velueaAccess = 10;
//let velueBalancFact = 0;

let count = 0;
let countNum = 0;
let result = 0;
let x = 0;

while(x < velueCount){
  
result = velueTelephone + velueaAccess;
count += result;
countNum =  Number(count);
++x;

// document.write(result);
// document.write("<br>");
// document.write(x);
// document.write("<br>");
console.log(result)

}

let velBalance = velueBalanc - countNum;

document.write(`Сумма закупки ${countNum}, 
остаток вышего баланса составляет ${velBalance}, 
колчичество телефонов Вы купили ${x}`);


let velueAcss = prompt("Если Вы хотите докупить Аксессуары нажмите 1 \n если то нажмите 2");


switch (check) {
  case "1":
    check = Acss(check);
    break;
  case "2":
    check = par(check);
    break;
  case "3":
    check = parSb(check);
    break;
  case "4":
    check = parOb(check);
    break;
  case "5":
    check = Prism(check);
    break;
  case "6":
    check = PrismS(check);
    break;
  case "7":
    check = Pyromide(check);
    break;
  case "8":
    check = PyromideS(check);
    break;

  default:
    document.write(" Вы ввели не то действие, обновите страницу.");
}

// while((countNum + velueTelephone) <= velueBalanc){
  
//   result = velueTelephone + velueaAccess;
//   count += result;
//   countNum =  Number(count);
//   ++x;
  
//   // document.write(result);
//   // document.write("<br>");
//   // document.write(x);
//   // document.write("<br>");
//   console.log(result)
  
//   }



// let x = 0;
// do {
//     x++;
//     console.log("Итерация №" + x);
// }
// while (x < 10);

// let value2;
// let value3 = 10;

// do {
//     value2 = prompt("Введите любое значение больше 10");
//     document.write(value2);
// }
// while (value2 <= value3);
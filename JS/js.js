let velue = prompt("Введите баланс на закупку телефонов: ");
let velueCo = prompt("Сколько телефонов Вы хотите купить: ");
let velueBalanc = Number(velue);
let velueCount = Number(velueCo);

const velueTelephone = 50;
const velueaAccess = 10;
let count = 0;
let countBalance = 0;
let result = 0;
let x = 0;
let resultAcss = 0;
let countAcss = 0;
let xAcss = 0;
let countBalanceAcss = 0;
let taxnds = 0.2;

while(x < velueCount){

result = velueTelephone;
count += result;
countBalance =  Number(count);
++x;

console.log(result)

}

let velBalance = velueBalanc - countBalance;
let velBalancetaxs = countBalance * taxnds;
let totalBalanceTel = velBalance - velBalancetaxs;

document.write(`Сумма закупки ${countBalance}, 
остаток вышего баланса составляет ${velBalance}, 
колчичество телефонов Вы купили ${x}, налог НДС составил ${velBalancetaxs}, остаток на балансе после вычета налогова - ${totalBalanceTel}`);

let velueAcss = prompt("Если Вы хотите докупить Аксессуары нажмите 1 \n если нет то нажмите 2");

if(velueAcss < 2 && velueAcss){
  let velueCoAcss = prompt("Сколько акссесуаров Вы хотите купить: ");
while(xAcss < velueCoAcss){
 
  resultAcss = velueaAccess;
  countAcss += resultAcss;
  countBalanceAcss =  Number(countAcss);
  ++xAcss;

}

}else{

}

let velBalanceaAcss = totalBalanceTel - countBalanceAcss;
let velBalanceaAcsstaxs = countBalanceAcss * taxnds;
let totalBalance = velBalanceaAcss - velBalanceaAcsstaxs;

document.write("<br>");
document.write(`Сумма закупки акссесуаров ${countBalanceAcss}, 
остаток вышего баланса составляет ${velBalanceaAcss}, 
  Вы купили колчичество аксессуаров ${xAcss}, налог НДС составил ${velBalanceaAcsstaxs}, итоговый баланс после вычета налогов ${totalBalance}`);

console.log(velueBalanc);



















// switch (check) {
//   case "1":
//     check = acss()(check);
//     break;
//   case "2":
//     check = nacss(check);
//     break;


//   default:
//     document.write(" Вы ввели не то действие, обновите страницу.");
// }

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
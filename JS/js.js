let velue = prompt("Введите баланс на закупку телефонов: ");
let velueMounth = prompt("Введите на сколько месяцев сделать расчет: ");

let velueBalanc = Number(velue);
let mounth = Number(velueMounth);

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
const taxnds = 0.2;
let velBalanceaAcsstaxs = 0;
let totalBalance = 0;
let mounthIter = 0;


while(mounth > mounthIter){
let velueCo = prompt("Сколько телефонов Вы хотите купить: ");
let velueCount = Number(velueCo);

x=0;
result = 0;
  count = 0;
  countBalance = 0;
while (x < velueCount) {
  
  result = velueTelephone;
  count += result;
  countBalance = Number(count);
  ++x;

  console.log(result);
}

velueBalanc = velueBalanc - countBalance;
let velBalancetaxs = countBalance * taxnds;
let totalBalanceTel = velueBalanc - velBalancetaxs;

document.write(`Сумма закупки ${countBalance}, 
остаток вышего баланса составляет ${velueBalanc}, 
колчичество телефонов Вы купили ${x}, налог НДС составил ${velBalancetaxs}, 
остаток на балансе после вычета налогова - ${totalBalanceTel}`);

velueBalanc = velueBalanc - velBalancetaxs;

let velueAcss = prompt(
  "Если Вы хотите докупить Аксессуары нажмите 1 \n если нет то нажмите 2"
);

if (velueAcss <= 1) {
  let velueCoAcss = prompt("Сколько акссесуаров Вы хотите купить: ");
  xAcss = 0;
  resultAcss = 0;
  countAcss = 0;
  countBalanceAcss = 0;
  while (xAcss < velueCoAcss) {
   
    resultAcss = velueaAccess;
    countAcss += resultAcss;
    countBalanceAcss = Number(countAcss);
    ++xAcss;
  }
} else {
}

velueBalanc = velueBalanc - countBalanceAcss;
velBalanceaAcsstaxs = countBalanceAcss * taxnds;
totalBalance = velueBalanc - velBalanceaAcsstaxs;
console.log("здесь", velBalanceaAcsstaxs);

document.write("<br>");
document.write(`Сумма закупки акссесуаров ${countBalanceAcss}, 
остаток вышего баланса составляет ${velueBalanc}, 
Вы купили колчичество аксессуаров ${xAcss}, налог НДС составил ${velBalanceaAcsstaxs}, 
итоговый баланс после вычета налогов ${totalBalance}`);

velueBalanc = velueBalanc - velBalanceaAcsstaxs;

console.log(velueBalanc);

++mounthIter;
document.write("<br>");
}







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
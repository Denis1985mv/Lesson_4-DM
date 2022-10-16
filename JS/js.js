let velue = prompt("Введите баланс на закупку телефонов: ");
let velueMounth = prompt("Введите на сколько месяцев сделать расчет: ");

let velueBalanc = Number(velue);
let mounth = Number(velueMounth);

const velueTelephone = 50;
const velueaAccess = 10;
const taxnds = 0.2;
let count = 0;
let countBalance = 0;
let result = 0;
let x = 0;
let resultAcss = 0;
let countAcss = 0;
let xAcss = 0;
let countBalanceAcss = 0;
let velBalanceaAcsstaxs = 0;
let totalBalance = 0;
let mounthIter = 0;
let mounthIterVel = 1;
let velueBalancTest = Number(velue);

while(mounth > mounthIter){
if(velueBalanc >= 0){
let velueCo = prompt(`Месяц ${mounthIterVel} Сколько телефонов Вы хотите купить(стоимость одного телефона -${velueTelephone} рб), на балансе еще осталось ${velueBalanc} рб (с учетом вычета налогов):`);
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

document.write(`Месяц ${mounthIterVel}. Сумма закупки ${countBalance} рб, 
остаток Вашего баланса составляет ${velueBalanc} рб, 
количество телефонов которые Вы купили ${x} шт, налог НДС составил ${velBalancetaxs} рб, 
остаток на балансе после вычета налогов ${totalBalanceTel} рб`);

velueBalanc = velueBalanc - velBalancetaxs;

let velueAcss = prompt(
  "Если Вы хотите докупить аксессуары нажмите 1 \n если нет то нажмите 2(или любую цифру кроме 1)"
);

xAcss = 0;
if (velueAcss <= 1 && velueAcss > 0 ) {
  let velueCoAcss = prompt(`Сколько аксессуаров Вы хотите купить (стоисоть ${velueaAccess}):`);
  
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
document.write(`Сумма закупки аксессуаров ${countBalanceAcss}, 
остаток Вашего баланса составляет ${velueBalanc} рб, 
Вы купили  количество аксессуаров ${xAcss} шт, налог НДС составил ${velBalanceaAcsstaxs} рб, 
итоговый баланс после вычета налогов ${totalBalance} рб`);
document.write("<br>");

velueBalanc = velueBalanc - velBalanceaAcsstaxs;

console.log(velueBalanc);

++mounthIter;
++mounthIterVel;
document.write("<br>");
countBalanceAcss = 0;
countBalance = 0;
}else{
  alert(`Не хватает средств, баланс ${velueBalanc} рб. Вы не рассчитали баланс!`);
  break;
}
}


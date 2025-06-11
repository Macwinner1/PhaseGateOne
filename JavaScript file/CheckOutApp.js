
const prompt = require('prompt-sync')();
let purchaseList = [];
let names = " ";
let itemList = [];
let total = 0;
let subTotal = 0;
let billTotal = 0;
let discountAmount = 0;
let vat = 0;
let balance = 0;
let headTemplate = `
SEMICOLON STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 08068853611
DATE : 
Cashier: {cashiersName}
Customer Name: {customersName}
======================================================
	ITEM	  QTY	  PRICE	  TOTAL(NGN)
------------------------------------------------------
`;

function nameList(customersName, cashiersName){
names = headTemplate.replace(/{customersName}/g, customersName).replace(/{cashiersName}/g, cashiersName);
return names;
}

function ItemList(itemName, pieces, unitPrice){
itemList[0] = itemName;
itemList[1] = pieces;
itemList[2] = unitPrice;
itemList[3] = total;
purchaseList.push(itemList);

return purchaseList;
}


function CustomerDetail(name, purchaseList){
}

function calculateSubTotal(pieces , unitPrice){
total = unitPrice * pieces;
subTotal += total;
return subTotal;
}

function calculateDiscountAmount(subTotal, discount){
discountAmount = subTotal * (discount / 100);
return discountAmount;
}

function calculateVat(subTotal){
vat = subTotal * 0.075;
return vat;
}

function calculateBillTotal(){
billTotal = vat + (subTotal - discountAmount);
return billTotal;
}

function calculateBalance(){
if(billTotal <= cashGiven ){
balance = cashGiven - billTotal;
}
else{
return "payment is not complete"
}
return balance;
}



let customersName = prompt("What is the customer's Name: ");

let itemName = prompt("What did the customer buy: ");

let pieces = prompt("How many pieces: ");

let unitPrice = prompt("How much per unit: ");

let cashiersName = prompt("What is your name: ");

let discount = prompt("How much discount will he get: ");

let cashGiven = prompt("How much did the customer give to you: ");


nameList(customersName, cashiersName);
calculateSubTotal(pieces , unitPrice);
calculateDiscountAmount(subTotal, discount);
ItemList(itemName, pieces, unitPrice);
calculateVat(subTotal);
calculateBillTotal();
calculateBalance();

console.log(names);
console.log(purchaseList.join("        "));
console.log(subTotal);
console.log(billTotal);
console.log(discountAmount);
console.log(vat);
console.log(balance);

const prompt = require('prompt-sync')();
let purchaseList = [];
let names = []
let item = [];
let subTotal = 0;
let billTotal = 0;
let discountAmount = 0;
let vat = 0;

function CustomerName(customersName){
names[0] = customersName;
}


function CustomerDetail(name, purchaseList, ){

}

function calculateSubTotal(pieces , unitPrice){
subTotal += unitPrice * pieces;
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


let customersName = prompt("What is the customer's Name: ");
names.push(customersName);
let itemName = prompt("What did the customer buy: ");
item.push(itemName);
let pieces = prompt("How many pieces: ");
item.push(pieces);
let unitPrice = prompt("How much per unit: ");
item.push(unitPrice);
let cashiersName = prompt("What is your name: ");
names.push(cashiersName);
let discount = prompt("How much discount will he get: ");

let cashGiven = prompt("How much did the customer give to you: ");
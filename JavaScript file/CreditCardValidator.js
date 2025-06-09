let cardNumber = [4,3,8,8,5,7,6,0,1,8,4,1,0,7,0,7];

function AtmCardNumber(cardNumber){
let cardLength = cardNumber.length;
let cardVisa = {};
let cardMasterCard = {};
let cardDiscover = {};
let cardAmericaExpress = {};
let cardValid = {};
let evenIndexDigits = 0;
let oddIndexDigits = 0;
let checkValid = 0;
let cardNotValid = {
valid : "invalid",
reason : "Invalid length"
};

for(let count = cardLength; count > 0; count-=2){
let checkDigit = cardNumber[count] * 2;
if(checkDigit >= 10){
let tempRight = checkDigit % 10;
let tempLeft = checkDigit / 10;
checkDigit = tempLeft + tempRight;
evenIndexDigits += checkDigit;
}
else{
evenIndexDigits += checkDigit;
}
}

for(let count = cardLength; count > 0; count-=3){
oddIndexDigits += cardNumber[count];
}

checkValid = evenIndexDigits + oddIndexDigits;

if(cardLength == 15 && cardNumber[0] == 3 && cardNumber[1] == 7 && checkValid % 10 == 0){
cardAmericaExpress.valid = valid;
cardAmericaExpress.issuer = "America Express";
return cardAmericaExpress;
}
if(cardLength == 16 && cardNumber[0] == 4 && checkValid % 10 == 0){
cardVisa.valid = valid;
cardVisa.issuer = "Visa";
return cardVisa;
}
if(cardLength == 16 && cardNumber[0] == 5 && checkValid % 10 == 0){
cardMasterCard.valid = valid;
cardMasterCard.issuer = "MasterCard";
return cardMasterCard;
}
if(cardLength == 16 && cardNumber[0] == 6 && checkValid % 10 == 0){
cardDiscover.valid = valid;
cardDiscover.issuer = "Discover";
return cardDiscover;
}
else{
return cardNotValid;
}

}

console.log(AtmCardNumber(cardNumber));




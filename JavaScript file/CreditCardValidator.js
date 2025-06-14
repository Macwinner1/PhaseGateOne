const prompt = require('prompt-sync')();

function CardNumber(number) {
    let cardNumberString = number.split("");
    let cardNumber = [];
    for (let count = 0; count < cardNumberString.length; count++) {
        cardNumber.push(parseInt(cardNumberString[count]));
    }
    return cardNumber;
}

function AtmCardNumber(cardNumber) {
    let cardLength = cardNumber.length;
    let cardVisa = {};
    let cardMasterCard = {};
    let cardDiscover = {};
    let cardAmericaExpress = {};
    let evenIndexDigits = 0;
    let oddIndexDigits = 0;
    let checkValid = 0;
    let cardNotValid = {
        valid: "invalid",
        reason: "Invalid length"
    };

    for (let count = 0; count < cardLength; count += 2) {
        let checkDigit = cardNumber[count] * 2;
        if (checkDigit >= 10) {
            let tempRight = checkDigit % 10;
            let tempLeft = Math.floor(checkDigit / 10);
            checkDigit = tempLeft + tempRight;
        }
        evenIndexDigits += checkDigit;
    }

    for (let counter = 1; counter < cardLength; counter += 2) {
        oddIndexDigits += cardNumber[counter];
    }

    checkValid = evenIndexDigits + oddIndexDigits;

    if (cardLength === 15 && cardNumber[0] === 3 && cardNumber[1] === 7 && checkValid % 10 === 0) {
        cardAmericaExpress.valid = "valid";
        cardAmericaExpress.issuer = "American Express";
        return cardAmericaExpress;
    } else if (cardLength === 16 && cardNumber[0] === 4 && checkValid % 10 === 0) {
        cardVisa.valid = "valid";
        cardVisa.issuer = "Visa";
        return cardVisa;
    } else if (cardLength === 16 && cardNumber[0] === 5 && checkValid % 10 === 0) {
        cardMasterCard.valid = "valid";
        cardMasterCard.issuer = "MasterCard";
        return cardMasterCard;
    } else if (cardLength === 16 && cardNumber[0] === 6 && checkValid % 10 === 0) {
        cardDiscover.valid = "valid";
        cardDiscover.issuer = "Discover";
        return cardDiscover;
    } else {
        return cardNotValid;
    }
}

let number = prompt("Enter your card number: ");
console.log(AtmCardNumber(CardNumber(number)));

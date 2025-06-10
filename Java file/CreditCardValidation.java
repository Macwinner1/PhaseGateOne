import java.util.Arrays;
public class CreditCardValidation {

    public static String AtmCardNumber(String Number) {
    	   String[] cardNumberString = Number.split("");
    	   int[] cardNumber = new int[cardNumberString.length];
        for (int value = 0; value < cardNumberString.length; value++) {
            cardNumber[value] = Integer.parseInt(cardNumberString [value]);
        }
        int cardLength = cardNumber.length;        
        int evenIndexDigits = 0;
        int oddIndexDigits = 0;
        int checkValid = 0;

        String cardStatus = " ";
          
        StringBuilder cardTemplate = new StringBuilder();
cardTemplate.append("***************************************\n")
.append("***Credit Card Type: {cardType}\n")
.append("***Credit Card Number: {cardNumber}\n")
.append("***Credit Card Digit Length: {cardLength}\n")
.append("***Credit Card Validity Status: {status}\n")
.append("***************************************\n");

        for (int count = 0; count < cardLength; count += 2) {
            int checkDigit = cardNumber[count] * 2;
            if (checkDigit >= 10) {
                int tempRight = checkDigit % 10;
                int tempLeft = checkDigit / 10;
                checkDigit = tempLeft + tempRight;
            }
            evenIndexDigits += checkDigit;
        }
        
        for (int counter = 1; counter < cardLength; counter += 2) {
            oddIndexDigits += cardNumber[counter];
        }
        
        checkValid = evenIndexDigits + oddIndexDigits;
        
        if (cardLength == 15 && cardNumber[0] == 3 && cardNumber[1] == 7 && checkValid % 10 == 0) {
           cardStatus = cardTemplate.toString().replace("{cardNumber}", String.valueOf(Number)).replace("{cardType}", "American Express").replace("{cardLength}", String.valueOf(cardLength)).replace("{status}", "Valid");
        	return cardStatus;

        } else if (cardLength == 16 && cardNumber[0] == 4 && checkValid % 10 == 0) {
           cardStatus = cardTemplate.toString().replace("{cardNumber}", String.valueOf(Number)).replace("{cardType}", "Visa").replace("{cardLength}", String.valueOf(cardLength)).replace("{status}", "Valid");
        	return cardStatus;
        	
        } else if (cardLength == 16 && cardNumber[0] == 5 && checkValid % 10 == 0) {
        	cardStatus = cardTemplate.toString().replace("{cardNumber}", String.valueOf(Number)).replace("{cardType}", "MasterCard").replace("{cardLength}", String.valueOf(cardLength)).replace("{status}", "Valid");
        	return cardStatus;
        
        } else if (cardLength == 16 && cardNumber[0] == 6 && checkValid % 10 == 0) {
        	cardStatus = cardTemplate.toString().replace("{cardNumber}", String.valueOf(Number)).replace("{cardType}", "Discovery").replace("{cardLength}", String.valueOf(cardLength)).replace("{status}", "Valid");
        	return cardStatus;
        	
        } else {
        	cardStatus = cardTemplate.toString().replace("{cardNumber}", String.valueOf(Number)).replace("{cardType}", "Discovery").replace("{cardLength}", String.valueOf(cardLength)).replace("{status}", "Invalid");
        	return cardStatus;
        }
    }
    
    public static void main(String[] args) {
        String cardNumber = "5399831619690403";
        System.out.println(CreditCardValidation.AtmCardNumber(cardNumber));
    }
}

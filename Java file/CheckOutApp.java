import java.util.ArrayList;
import java.util.Scanner;

public class CheckOutApp {
    static ArrayList<String[]> purchaseList = new ArrayList<>();
    static String names = "";
    static int total = 0;
    static int subTotal = 0;
    static int billTotal = 0;
    static int discountAmount = 0;
    static int vat = 0;
    static int balance = 0;
    static int cashGiven = 0;

    static String headTemplate = """
    SEMICOLON STORES
    MAIN BRANCH
    LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
    TEL: 08068853611
    DATE : 
    Cashier: {cashiersName}
    Customer Name: {customersName}
    ======================================================
        ITEM      QTY     PRICE   TOTAL(NGN)
    ------------------------------------------------------
    """;

    public static String nameList(String customersName, String cashiersName) {
        names = headTemplate.replace("{customersName}", customersName).replace("{cashiersName}", cashiersName);
        return names;
    }

    public static void addItemToList(String itemName, int pieces, int unitPrice) {
        total = pieces * unitPrice;
        purchaseList.add(new String[]{itemName, String.valueOf(pieces), String.valueOf(unitPrice), String.valueOf(total)});
        subTotal += total;
    }

    public static int calculateDiscountAmount(int discount) {
        discountAmount = subTotal * discount / 100;
        return discountAmount;
    }

    public static int calculateVat() {
        vat = (int) (subTotal * 0.075);
        return vat;
    }

    public static int calculateBillTotal() {
        billTotal = subTotal - discountAmount + vat;
        return billTotal;
    }

    public static String calculateBalance() {
        if (cashGiven >= billTotal) {
            balance = cashGiven - billTotal;
            return "Balance: " + balance;
        } else {
            return "Payment is not complete. Additional NGN " + (billTotal - cashGiven) + " needed.";
        }
    }

    public static void printReceipt() {
        System.out.println(names);
        for (String[] item : purchaseList) {
            System.out.println(item[0] + "\t" + item[1] + "\t" + item[2] + "\t" + item[3]);
        }
        System.out.println("------------------------------------------------------");
        System.out.println("Subtotal: NGN " + subTotal);
        System.out.println("Discount: NGN " + discountAmount);
        System.out.println("VAT: NGN " + vat);
        System.out.println("Total Bill: NGN " + billTotal);
        System.out.println(calculateBalance());
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("What is the customer's name: ");
        String customersName = scanner.nextLine();

        System.out.print("What is your name (Cashier): ");
        String cashiersName = scanner.nextLine();

        nameList(customersName, cashiersName);

        while (true) {
            System.out.print("what did the user buy?: ");
            String itemName = scanner.nextLine();
            
            System.out.print("How many pieces: ");
            int pieces = scanner.nextInt();
            
            System.out.print("How much per unit: ");
            int unitPrice = scanner.nextInt();

		 System.out.print("Add more items? (yes/no)");
		 String addMore = scanner.nextLine();
		             
            if (addMore.equalsIgnoreCase("yes")) break;


            addItemToList(itemName, pieces, unitPrice);
        }

        System.out.print("Enter discount percentage: ");
        int discount = scanner.nextInt();

        System.out.print("How much did the customer give: ");
        cashGiven = scanner.nextInt();

        calculateDiscountAmount(discount);
        calculateVat();
        calculateBillTotal();

        printReceipt();

    }
}

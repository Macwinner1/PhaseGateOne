import static org.junit.jupiter.api.Assertions.*;
import java.util.ArrayList;
import org.junit.jupiter.api.Test;

public class CheckOutAppTest {

    @Test
    void testAddItemToList() {
        CheckOutApp.addItemToList("Milk", 2, 500);
        assertEquals(1000, CheckOutApp.subTotal);
        assertEquals(1, CheckOutApp.purchaseList.size());
    }

    @Test
    void testSubtotalCalculation() {
        CheckOutApp.addItemToList("Sugar", 3, 300);
        assertEquals(1900, CheckOutApp.subTotal); 
    }

    @Test
    void testDiscountCalculation() {
        int discount = CheckOutApp.calculateDiscountAmount(10);
        assertEquals(190, discount); 
    }

    @Test
    void testVatCalculation() {
        int vat = CheckOutApp.calculateVat();
        assertEquals(143, vat); 
    }

    @Test
    void testBillTotalCalculation() {
        int billTotal = CheckOutApp.calculateBillTotal();
        assertEquals(1853, billTotal); 
    }

    @Test
    void testBalanceCalculationExactPayment() {
        CheckOutApp.cashGiven = 1853;
        assertEquals("Balance: 0", CheckOutApp.calculateBalance());
    }

    @Test
    void testBalanceCalculationExcessPayment() {
        CheckOutApp.cashGiven = 2000;
        assertEquals("Balance: 147", CheckOutApp.calculateBalance());
    }

    @Test
    void testBalanceCalculationInsufficientPayment() {
        CheckOutApp.cashGiven = 1500;
        assertEquals("Payment is not complete. Additional NGN 353 needed.", CheckOutApp.calculateBalance());
    }
}

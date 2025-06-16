import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class CreditCardValidationTest {

    @Test
    void testValidVisaCard() {
        String result = CreditCardValidation.AtmCardNumber("4111111111111111");
        assertTrue(result.contains("Visa"));
        assertTrue(result.contains("Valid"));
    }

    @Test
    void testValidMasterCard() {
        String result = CreditCardValidation.AtmCardNumber("5399831619690403");
        assertTrue(result.contains("MasterCard"));
        assertTrue(result.contains("Valid"));
    }

    @Test
    void testValidAmericanExpress() {
        String result = CreditCardValidation.AtmCardNumber("371449635398431");
        assertTrue(result.contains("American Express"));
        assertTrue(result.contains("Valid"));
    }

    @Test
    void testValidDiscovery() {
        String result = CreditCardValidation.AtmCardNumber("6011111111111117");
        assertTrue(result.contains("Discovery"));
        assertTrue(result.contains("Valid"));
    }

    @Test
    void testInvalidCardLength() {
        String result = CreditCardValidation.AtmCardNumber("12345678");
        assertTrue(result.contains("Invalid"));
    }

    @Test
    void testInvalidChecksum() {
        String result = CreditCardValidation.AtmCardNumber("4111111111111112"); // Slightly modified Visa number
        assertTrue(result.contains("Invalid"));
    }

    @Test
    void testInvalidPrefix() {
        String result = CreditCardValidation.AtmCardNumber("2111111111111111"); // Starts with an invalid digit
        assertTrue(result.contains("Invalid"));
    }
}

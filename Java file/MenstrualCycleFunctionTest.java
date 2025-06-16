import static org.junit.jupiter.api.Assertions.*;
import java.time.LocalDate;
import org.junit.jupiter.api.Test;

public class MenstrualCycleFunctionTest {

    @Test
    void testValidDate() {
        LocalDate date = MenstrualCycleFunction.date_validation("2025-06-15");
        assertEquals(LocalDate.of(2025, 6, 15), date);
    }

    @Test
    void testInvalidYear() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            MenstrualCycleFunction.date_validation("2024-06-15");
        });
        assertEquals("Invalid year", exception.getMessage());
    }

    @Test
    void testInvalidMonth() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            MenstrualCycleFunction.date_validation("2025-13-01");
        });
        assertEquals("Invalid month", exception.getMessage());
    }

    @Test
    void testInvalidDay() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            MenstrualCycleFunction.date_validation("2025-06-32");
        });
        assertEquals("Invalid day", exception.getMessage());
    }

    @Test
    void testAddDays() {
        LocalDate date = LocalDate.of(2025, 6, 15);
        LocalDate newDate = MenstrualCycleFunction.add_days(date, 10);
        assertEquals(LocalDate.of(2025, 6, 25), newDate);
    }

    @Test
    void testEndOfMonthAddition() {
        LocalDate date = LocalDate.of(2025, 6, 30);
        LocalDate newDate = MenstrualCycleFunction.add_days(date, 2);
        assertEquals(LocalDate.of(2025, 7, 2), newDate);
    }
}

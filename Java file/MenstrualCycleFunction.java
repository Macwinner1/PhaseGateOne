import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class MenstrualCycleFunction {

    public static LocalDate date_validation(String date) {
        String[] parts = date.replace(",", "").split(" ");
        int year = Integer.parseInt(parts[0]);
        int month = Integer.parseInt(parts[1]);
        int day = Integer.parseInt(parts[2]);

        if (year != 2025) {
            throw new IllegalArgumentException("Invalid year");
        }
        if (month < 1 || month > 12) {
            throw new IllegalArgumentException("Invalid month");
        }
        if (day < 1 || day > 31) {
            throw new IllegalArgumentException("Invalid day");
        }

        return LocalDate.of(year, month, day);
    }

    public static LocalDate add_days(LocalDate date, int days) {
        return date.plusDays(days);
    }
}

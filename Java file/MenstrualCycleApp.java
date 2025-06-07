import java.util.Scanner;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class MenstrualCycleApp {
    public static void main(String[] args) {
        Scanner prompt = new Scanner(System.in);

        boolean exit = true;
        while (exit) {
            String menu = """
===========================================
    Welcome To Menstrual Cycle Calculator

    Press:
    1. Check your Menstrual Cycle
    0. Exit
===========================================
            """;

            System.out.print(menu);
            String menu_input = prompt.nextLine();
            switch (menu_input) {
                case "0":
                    exit = false;
                    break;
                case "1":
                    System.out.print("Enter Last Date Period Started (YYYY-MM-DD): ");
                    LocalDate dateInput = MenstrualCycleFunction.date_validation(prompt.nextLine());
                    LocalDate start_date = dateInput;

                    System.out.print("Enter Cycle Length (1-35): ");
                    int cycle_length = Integer.parseInt(prompt.nextLine());

                    System.out.print("Enter Bleeding Length (1-7): ");
                    int bleeding_length = Integer.parseInt(prompt.nextLine());

                    LocalDate next_period_date = start_date.plusDays(cycle_length);
                    LocalDate ovulation_day = next_period_date.minusDays(14);
                    LocalDate fertile_window_start = ovulation_day.minusDays(5);
                    LocalDate fertile_window_end = ovulation_day.plusDays(1);
                    LocalDate first_safe_day_start = start_date.plusDays(bleeding_length + 1);
                    LocalDate first_safe_day_end = fertile_window_start.minusDays(1);
                    LocalDate second_safe_day_start = fertile_window_end.plusDays(1);
                    LocalDate second_safe_day_end = next_period_date.minusDays(1);

                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

                    boolean exit1 = true;
                    while (exit1) {
                        String inner_menu = """
===========================================
    Menstrual Cycle Result Menu

    Press:
    1. View all the Results
    2. View Your Next Period Date
    3. View Your Ovulation Date
    4. View Your Safe Day
    5. View Your Fertile Window
    0. <= Back
===========================================
                        """;

                        System.out.print(inner_menu);
                        String inner_menu_input = prompt.nextLine();

                        switch (inner_menu_input) {
                            case "0":
                                exit1 = false;
                                break;
                            case "1":
                                boolean exit2 = true;
                                while (exit2) {
                                    System.out.println("Your next period date: " + next_period_date.format(formatter));
                                    System.out.println("Your estimated ovulation date: " + ovulation_day.format(formatter));
                                    System.out.println("Your First Estimated Safe Day before fertile window: " +
                         first_safe_day_start.format(formatter) + " to " + first_safe_day_end.format(formatter));
                                    System.out.println("Your Second Estimated Safe Day after fertile window: " +
                         second_safe_day_start.format(formatter) + " to " + second_safe_day_end.format(formatter));
                                    System.out.println("Your fertile window starts: " + fertile_window_start.format(formatter));
                                    System.out.println("Your fertile window ends: " + fertile_window_end.format(formatter));
                                    System.out.print("""
=============
Press:
0. <= Back
=============
""");
                                    String back_input = prompt.nextLine();
                                    if (back_input.equals("0")) exit2 = false;
                                    else System.out.println("""
*************
Invalid input
*************
""");
                                }
                                break;
                            case "2":
                                boolean exit3 = true;
                                while (exit3) {
                                    System.out.println("Your next period date: " + next_period_date.format(formatter));
                                    System.out.print("""
=============
Press:
0. <= Back
=============
""");
                                    String back_input = prompt.nextLine();
                                    if (back_input.equals("0")) exit3 = false;
                                    else System.out.println("""
*************
Invalid input
*************
""");
                                }
                                break;
                            case "3":
                                boolean exit4 = true;
                                while (exit4) {
                                    System.out.println("Your estimated ovulation date: " + ovulation_day.format(formatter));
                                    System.out.print("""
=============
Press:
0. <= Back
=============
""");
                                    String back_input = prompt.nextLine();
                                    if (back_input.equals("0")) exit4 = false;
                                    else System.out.println("""
*************
Invalid input
*************
""");
                                }
                                break;
                            case "4":
                                boolean exit5 = true;
                                while (exit5) {
                                    System.out.println("Your First Estimated Safe Day before fertile window: " +
                         first_safe_day_start.format(formatter) + " to " + first_safe_day_end.format(formatter));
                                    System.out.println("Your Second Estimated Safe Day after fertile window: " +
                         second_safe_day_start.format(formatter) + " to " + second_safe_day_end.format(formatter));
                                    System.out.print("""
=============
Press:
0. <= Back
=============
""");
                                    String back_input = prompt.nextLine();
                                    if (back_input.equals("0")) exit5 = false;
                                    else System.out.println("""
*************
Invalid input
*************
""");
                                }
                                break;
                            case "5":
                                boolean exit6 = true;
                                while (exit6) {
                                    System.out.println("Your fertile window starts: " + fertile_window_start.format(formatter));
                                    System.out.println("Your fertile window ends: " + fertile_window_end.format(formatter));
                                    System.out.print("""
=============
Press:
0. <= Back
=============
""");
                                    String back_input = prompt.nextLine();
                                    if (back_input.equals("0")) exit6 = false;
                                    else System.out.println("""
*************
Invalid input
*************
""");
                                }
                                break;
                        }
                    }
                    break;
            }
        }
       
    }
}

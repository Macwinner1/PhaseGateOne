import java.util.Scanner;

public class StudentGrade {
    
    static Scanner scanner = new Scanner(System.in);
    
    public static int numberOfStudents() {
        System.out.print("How many students do you have? ");
        return scanner.nextInt();
    }

    public static int numberOfSubjects() {
        System.out.print("How many subjects do they offer? ");
        return scanner.nextInt();
    }

    public static double scoreRange(double score) {
        while (score < 1 || score > 100) {
            System.out.println("Invalid score! Please enter a value between 1 and 100.");
            System.out.print("Retry score input: ");
            score = scanner.nextDouble();
        }
        return score;
    }

}

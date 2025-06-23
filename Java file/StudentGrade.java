import java.util.Scanner;

public class StudentGrade {
    
    static Scanner scanner = new Scanner(System.in);
    
public static int numberOfStudents() {
        int numberOfStudents;
        while (true) {
            System.out.print("How many students do you have? ");
            String input = scanner.nextLine().trim();    
            if (input.matches("\\d+") && Integer.parseInt(input) > 0) {
                return Integer.parseInt(input);
            }  
            System.out.println("Invalid input! Please enter a valid number.");
        }
}
    
public static int numberOfSubjects() {
        int numberOfSubjects;      
        while (true) {
            System.out.print("How many subjects do they offer? ");
            String input = scanner.nextLine().trim();           
            if (input.matches("\\d+") && Integer.parseInt(input) > 0) {
                return Integer.parseInt(input);
            }          
            System.out.println("Invalid input! Please enter a valid number.");
        }
}
    
public static double scoreRange(double score) {
        while (score < 1 || score > 100) {
            System.out.println("Invalid score! Please enter a value between 1 and 100.");
            System.out.print("Retry score input: ");
            score = scanner.nextDouble();
        }
        return score;
}

public static String headerStyle(int numberOfSubjects) {
        StringBuilder header = new StringBuilder("Student\t\t");
        for (int count = 1; count <= numberOfSubjects; count++) {
            header.append("Sub").append(count).append("\t");
        }
        header.append("TOT\tAve\tPOS");
        return header.toString();
    }
public static double[][] collectStudentsDetails(int numberOfStudents, int numberOfSubjects) {
        double[][] studentScores = new double[numberOfStudents][numberOfSubjects + 2];
        for (int student = 0; student < numberOfStudents; student++) {
            double totalScore = 0;
            System.out.println("Entering scores for Student " + (student + 1) + ":");
            for (int subject = 0; subject < numberOfSubjects; subject++) {
                System.out.print("Subject " + (subject + 1) + ": ");
                double score = scoreRange(scanner.nextDouble());
                studentScores[student][subject] = score;
                totalScore += score;

            }
                studentScores[student][numberOfSubjects] = totalScore;
                double averageScore = Math.round((totalScore / numberOfSubjects) * 100.0) / 100.0;
                studentScores[student][numberOfSubjects + 1] = averageScore;

                    }

        return studentScores;
}

public static void calculatePositions(double[][] studentScores) {
        int numberOfStudents = studentScores.length;
        int numberOfSubjects = studentScores[0].length - 3;
           
        for (int count = 0; count < numberOfStudents - 1; count++) {
            for (int counter = count + 1; counter < numberOfStudents; counter++) {
                if (studentScores[count][numberOfSubjects] < studentScores[counter][numberOfSubjects]) {
                    double[] temp = studentScores[count];
                    studentScores[count] = studentScores[counter];
                    studentScores[counter] = temp;
                }
            }
        }

        for (int count = 0; count < numberOfStudents; count++) {
            studentScores[count][numberOfSubjects + 2] = count + 1;
        }
    }
}
 
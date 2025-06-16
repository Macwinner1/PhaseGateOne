public class StudentGradeApp{
public static void main(String[] args) {
        int numberOfStudents = StudentGrade.numberOfStudents();
        int numberOfSubjects = StudentGrade.numberOfSubjects();

        double[][] studentData = StudentGrade.collectStudentsDetails(numberOfStudents, numberOfSubjects);
        StudentGrade.calculatePositions(studentData);

        System.out.println("=======================================================");
        System.out.println(StudentGrade.headerStyle(numberOfSubjects));
        System.out.println("=======================================================");

        for (int student = 0; student < numberOfStudents; student++) {
            System.out.print("Student " + (student + 1) + "\t");
            for (double score : studentData[student]) {
                System.out.print(score + "\t");
            }
            System.out.println();
        }
    }
}



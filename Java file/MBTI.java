import java.util.Scanner;
import java.util.Arrays;
public class MBTI {
    public static void main(String[] args) {
        Scanner prompt = new Scanner(System.in);
        int countA = 0;
        int countB = 0;
        String[] pickedOption = new String[20];

        System.out.println("""
        ==================================
        Welcome to MBTI Personality TEST
        ==================================
        """);

        System.out.print("What is your Name: ");
        String name = prompt.nextLine();

        String[][] questions = {
            {"A. Expend energy, enjoy groups", "B. Conserve energy, enjoy one-on-one"},
            {"A. Interpret literally", "B. Look for meaning and possibilities"},
            {"A. Logical, thinking, questioning", "B. Empathetic, feeling, accommodating"},
            {"A. Organized, orderly", "B. Flexible, adaptable"},
            {"A. More outgoing, think out loud", "B. More reserved, think to yourself"},
            {"A. Practical, realistic, experiential", "B. Imaginative, innovative, theoretical"},
            {"A. Candid, straight forward, frank", "B. Tactful, kind, encouraging"},
            {"A. Plan, schedule", "B. Unplanned, spontaneous"},
            {"A. Seek many tasks, public activities, interaction with others", "B. Seek private, solitary activities with quiet to concentrate"},
            {"A. Standard, usual, conventional", "B. Different, novel, unique"},
            {"A. Firm, tend to criticize, hold the line", "B. Gentle, tend to appreciate, conciliate"},
            {"A. Regulated, structured", "B. Easy-going, live and let live"},
            {"A. External, communicative, express yourself", "B. Internal, reticent, keep to yourself"},
            {"A. Focus on here-and-now", "B. Look to the future, global perspective, big picture"},
            {"A. Tough-minded, just", "B. Tender-hearted, merciful"},
            {"A. Preparation, plan ahead", "B. Go with the flow, adapt as you go"},
            {"A. Active, initiate", "B. Reflective, deliberate"},
            {"A. Facts, things, what is", "B. Ideas, dreams, what could be philosophical"},
            {"A. Matter of fact, issue-oriented", "B. Sensitive, people-oriented, compassionate"},
            {"A. Control, govern", "B. Latitude, freedom"}
        };

        String[][] options = {
            {"E", "I"},
            {"S", "N"},
            {"T", "F"},
            {"J", "P"}
        };

        int optionsCount = 0;
        String[] optionsList = new String[20];

        for (int count = 0; count < questions.length; count++) {
            System.out.println(questions[count][0] + " \t " + questions[count][1]);
            boolean wrongInput = true;
            
            while (wrongInput) {
                System.out.print("Select A or B: ");
                String answer = prompt.nextLine().toUpperCase();

                switch (answer) {
                    case "A":
                        pickedOption[count] = questions[count][0];
                        optionsList[count] = options[count % 4][0];
                        countA++;
                        wrongInput = false;
                        break;
                    case "B":
                        pickedOption[count] = questions[count][1];
                        optionsList[count] = options[count % 4][1];
                        countB++;
                        wrongInput = false;
                        break;
                    default:
                        System.out.println("Expected A or B as Response.");
                        System.out.println("I know this is an error, Please retry again.");
                        System.out.println(questions[count][0] + " \t " + questions[count][1]);
                }
            }
        }

        System.out.println("\n==================================");
        System.out.println("Number of A selected: " + countA);
        System.out.println("Number of B selected: " + countB);
        System.out.println(Arrays.toString(pickedOption));
        System.out.print(Arrays.toString(optionsList));
            }
}

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class StudentGradeTest {

    @Test
    void testScoreRangeValid() {
        assertTrue(StudentGrade.scoreRange(50) == 50);
        assertTrue(StudentGrade.scoreRange(99.9) == 99.9);
    }

    @Test
    void testScoreRangeOutOfBounds() {
        assertThrows(IllegalArgumentException.class, () -> StudentGrade.scoreRange(-1));
        assertThrows(IllegalArgumentException.class, () -> StudentGrade.scoreRange(101));
    }

    @Test
    void testPositionCalculation() {
        double[][] studentScores = {
            {80, 90, 85, 255, 85}, 
            {70, 95, 89, 254, 84.67}, 
            {60, 85, 80, 225, 75}, 
        };

        StudentGrade.calculatePositions(studentScores, 3);
        assertEquals(1, studentScores[0][5]);        
        assertEquals(2, studentScores[1][5]);
        assertEquals(3, studentScores[2][5]);
    }
}

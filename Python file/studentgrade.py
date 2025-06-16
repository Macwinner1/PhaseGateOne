def number_of_students():
    while True:
        number_of_students = input("How many students do you have? ").strip()
        
        if number_of_students.isdigit() and int(number_of_students) > 0:
            return int(number_of_students)
        
        print("Invalid input! Please enter a valid number.")

def number_of_subjects():
    while True:
        number_of_subjects = input("How many subjects do they offer? ").strip()
        
        if number_of_subjects.isdigit() and int(number_of_subjects) > 0:
            return int(number_of_subjects)
        
        print("Invalid input! Please enter a valid number.")

def score_range(score):
    while score < 1 or score > 100:
        print("Invalid score! Please enter a value between 1 and 100.")
        score = float(input("Retry score input: "))
    return score

def header_style(number_of_subjects):
    header = "Student\t\t"
    for count in range(1, number_of_subjects + 1):
        header += f"Sub{count}\t"
    header += "TOT\tAve\tPOS"
    return header

def collect_students_details(number_of_students, number_of_subjects):
    student_scores = []

    for count in range(1, number_of_students + 1):
        total_score = 0
        scores_list = []

        print(f"Entering scores for Student {count}:")
        for counter in range(1, number_of_subjects + 1):
            print(f"Subject {counter}: ", end="")
            score = score_range(float(input()))
            total_score += score
            scores_list.append(score)
        
        average_score = round(total_score / number_of_subjects, 2)
        scores_list.append(total_score)
        scores_list.append(average_score)
        student_scores.append(["Student " + str(count)] + scores_list)

    return student_scores

def calculate_positions(student_scores):
    for count in range(len(student_scores) - 1):
        for counter in range(count + 1, len(student_scores)):
            if student_scores[count][-2] < student_scores[counter][-2]:
                student_scores[count], student_scores[counter] = student_scores[counter], student_scores[count]

    for index in range(len(student_scores)):
        student_scores[index].append(index + 1)


number_of_students = number_of_students()
number_of_subjects = number_of_subjects()

student_data = collect_students_details(number_of_students, number_of_subjects)
calculate_positions(student_data)

print("=======================================================")
print(header_style(number_of_subjects))
print("=======================================================")

for student in student_data:
    print("\t".join(str(value) for value in student))


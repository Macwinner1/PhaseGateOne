def number_of_students():
    return int(input("How many students do you have? "))

def number_of_subjects():
    return int(input("How many subjects do they offer? "))

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


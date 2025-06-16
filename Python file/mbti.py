countA = 0
countB = 0
pickedOption = []

print("""
==================================
Welcome to MBTI Personality TEST
==================================
""")

name = input("What is your Name: ")

questions = [
    ["A. Expend energy, enjoy groups", "B. Conserve energy, enjoy one-on-one"],
    ["A. Interpret literally", "B. Look for meaning and possibilities"],
    ["A. Logical, thinking, questioning", "B. Empathetic, feeling, accommodating"],
    ["A. Organized, orderly", "B. Flexible, adaptable"],
    ["A. More outgoing, think out loud", "B. More reserved, think to yourself"],
    ["A. Practical, realistic, experiential", "B. Imaginative, innovative, theoretical"],
    ["A. Candid, straight forward, frank", "B. Tactful, kind, encouraging"],
    ["A. Plan, schedule", "B. Unplanned, spontaneous"],
    ["A. Seek many tasks, public activities, interaction with others", "B. Seek private, solitary activities with quiet to concentrate"],
    ["A. Standard, usual, conventional", "B. Different, novel, unique"],
    ["A. Firm, tend to criticize, hold the line", "B. Gentle, tend to appreciate, conciliate"],
    ["A. Regulated, structured", "B. Easy-going, live and let live"],
    ["A. External, communicative, express yourself", "B. Internal, reticent, keep to yourself"],
    ["A. Focus on here-and-now", "B. Look to the future, global perspective, big picture"],
    ["A. Tough-minded, just", "B. Tender-hearted, merciful"],
    ["A. Preparation, plan ahead", "B. Go with the flow, adapt as you go"],
    ["A. Active, initiate", "B. Reflective, deliberate"],
    ["A. Facts, things, what is", "B. Ideas, dreams, what could be philosophical"],
    ["A. Matter of fact, issue-oriented", "B. Sensitive, people-oriented, compassionate"],
    ["A. Control, govern", "B. Latitude, freedom"]
]

options = [['E', 'I'],
           ['S', 'N'],
           ['T', 'F'],
           ['J', 'P']]

optionsCount = 0
optionsList = []
result = []

for count in range(len(questions)):
    print("\t".join(questions[count]))
    wrongInput = True

    while wrongInput:
        answer = input().strip().upper()
        match answer:
            case 'A':
                pickedOption.append(questions[count][0])
                optionsList.append(options[count % 4][0])
                countA += 1
                optionsCount += 1
                wrongInput = False
            case 'B':
                pickedOption.append(questions[count][1])
                optionsList.append(options[count % 4][1])
                countB += 1
                optionsCount += 1
                wrongInput = False
            case _:
                print("Expected A or B as Response")
                print("I know this is an error, Please retry again")
                print("\t".join(questions[count]))

    if (count + 1) % 5 == 0:
        section_result = options[count % 4][0] if countA > countB else options[count % 4][1]
        result.append(section_result)
        print(f"Number of A selected: {countA}")
        print(f"Number of B selected: {countB}\n")
        countA = 0
        countB = 0
        
print(name)
print("\n".join(pickedOption))
print(" ".join(result))

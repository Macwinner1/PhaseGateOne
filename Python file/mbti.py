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
        
print(name + " below is your personality:")
print("\n".join(pickedOption))
overall_result = ("".join(result))

if overall_result == "INTJ":
    print("\nYour personality is: INTJ \nINTJ (Architect) is a personality type with the Introverted, Intuitive, Thinking, and Judging traits. \nThese thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. \nTheir inner world is often a private, complex one." )
elif overall_result == "INTP":
    print("\nYour personality is: INTP \nINTP (Logician) is a personality type with the Introverted, Intuitive, Thinking, and Prospecting traits. \nThese flexible thinkers enjoy taking an unconventional approach to many aspects of life. \nThey often seek out unlikely paths, mixing willingness to experiment with personal creativity.")
elif overall_result == "ENTJ":
    print("\nYour personality is: ENTJ \nENTJ (Commander) is a personality type with the Extraverted, Intuitive, Thinking, and Judging traits. \nThey are decisive people who love momentum and accomplishment. \nThey gather information to construct their creative visions but rarely hesitate for long before acting on them.")
elif overall_result == "ENTP":
    print("\nYour personality is: ENTP \nENTP (Debater) is a personality type with the Extraverted, Intuitive, Thinking, and Prospecting traits. \nThey tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. \nThey pursue their goals vigorously despite any resistance they might encounter.")
elif overall_result == "INFJ":
    print("\nYour personality is: INFJ \nINFJ (Advocate) is a personality type with the Introverted, Intuitive, Feeling, and Judging traits. \nThey tend to approach life with deep thoughtfulness and imagination. \nTheir inner vision, personal values, and a quiet, principled version of humanism guide them in all things.")
elif overall_result == "INFP":
    print("\nYour personality is: INFP \nINFP (Mediator) is a personality type with the Introverted, Intuitive, Feeling, and Prospecting traits. \nThese rare personality types tend to be quiet, open-minded, and imaginative, and \nthey apply a caring and creative approach to everything they do.")
elif overall_result == "ENFJ":
    print("\nYour personality is: ENFJ \nENFJ (Protagonist) is a personality type with the Extraverted, Intuitive, Feeling, and Judging traits. \nThese warm, forthright types love helping others, and they tend to have strong ideas and values. \nThey back their perspective with the creative energy to achieve their goals.")
elif overall_result == "ENFP":
    print("\nYour personality is: ENFP \nENFP (Campaigner) is a personality type with the Extraverted, Intuitive, Feeling, and Prospecting traits. \nThese people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. \nTheir vibrant energy can flow in many directions.")
elif overall_result == "ISTJ":
    print("\nYour personality is: ISTJ \nISTJ (Logistician) is a personality type with the Introverted, Observant, Thinking, and Judging traits. \nThese people tend to be reserved yet willful, with a rational outlook on life. \nThey compose their actions carefully and carry them out with methodical purpose.")
elif overall_result == "ISFJ":
    print("\nYour personality is: ISFJ \nISFJ (Defender) is a personality type with the Introverted, Observant, Feeling, and Judging traits. \nThese people tend to be warm and unassuming in their own steady way. \nThey’re efficient and responsible, giving careful attention to practical details in their daily lives.")
elif overall_result == "ESTJ":
    print("\nYour personality is: ESTJ \nESTJ (Executive) is a personality type with the Extraverted, Observant, Thinking, and Judging traits. \nThey possess great fortitude, emphatically following their own sensible judgment. \nThey often serve as a stabilizing force among others, able to offer solid direction amid adversity.")
elif overall_result == "ESFJ":
    print("\nYour personality is: ESFJ \nESFJ (Consul) is a personality type with the Extraverted, Observant, Feeling, and Judging traits. \nThey are attentive and people-focused, and they enjoy taking part in their social community. \nTheir achievements are guided by decisive values, and they willingly offer guidance to others.")
elif overall_result == "ISTP":
    print("\nYour personality is: ISTP \nISTP (Virtuoso) is a personality type with the Introverted, Observant, Thinking, and Prospecting traits. \nThey tend to have an individualistic mindset, pursuing goals without needing much external connection.\n They engage in life with inquisitiveness and personal skill, varying their approach as needed.")
elif overall_result == "ISFP":
    print("\nYour personality is: ISFP \nISFP (Adventurer) is a personality type with the Introverted, Observant, Feeling, and Prospecting traits. \nThey tend to have open minds, approaching life, new experiences, and people with grounded warmth. \nTheir ability to stay in the moment helps them uncover exciting potentials.")
elif overall_result == "ESTP":
    print("\nYour personality is: ESTP \nESTP (Entrepreneur) is a personality type with the Extraverted, Observant, Thinking, and Prospecting traits. \nThey tend to be energetic and action-oriented, deftly navigating whatever is in front of them. \nThey love uncovering life’s opportunities, whether socializing with others or in more personal pursuits.")
elif overall_result == "ESFP":
    print("\nYour personality is: ESFP  \nESFP (Entertainer) is a personality type with the Extraverted, Observant, Feeling, and Prospecting traits. \nThese people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. \nThey can be very social, often encouraging others into shared activities.")

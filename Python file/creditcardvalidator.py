from math import floor
#card_number = 4388576018402626;
#card_number = 4388576018410707;
#card_number = 5399831619690403;

def card_number(number):
    card_number_list = [int(digit) for digit in str(number)]
    return card_number_list

def atm_card_number(card_number): 
	global even_index_digits
	card_length = len(card_number)	
	even_index_digits = 0
	odd_index_digits = 0
	card_not_valid = {"valid" : "invalid", "reason" : "Invalid length"}

	for count in range(0, card_length, 2):
		check_digit = card_number[count] * 2
		if check_digit >= 10:
			temp_right = check_digit % 10
			temp_left = floor(check_digit / 10)
			check_digit = temp_left + temp_right
		even_index_digits += check_digit
	
	for counter in range(1, card_length, 2):
		odd_index_digits += card_number[counter]
	
	check_valid = even_index_digits+ odd_index_digits
	
	if card_length == 15 and card_number[0] == 3 and card_number[1] == 7 and check_valid % 10 == 0:
		return {"valid": "valid", "issuer": "America Express"}
	elif card_length == 16 and card_number[0] == 4 and check_valid % 10 == 0:
		return {"valid": "valid", "issuer": "Visa"}
	elif card_length == 16 and card_number[0] == 5 and check_valid % 10 == 0:
		return {"valid": "valid", "issuer": "MasterCard"}
	elif card_length == 16 and card_number[0] == 6 and check_valid % 10 == 0:
		return {"valid": "valid", "issuer": "Discover"}
	else:
		return card_not_valid
	


number = input("Enter your card number: ");
print(atm_card_number(card_number(number)))





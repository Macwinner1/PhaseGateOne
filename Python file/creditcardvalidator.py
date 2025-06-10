from math import floor
#card_number = [4,3,8,8,5,7,6,0,1,8,4,0,2,6,2,6];
card_number = [4,3,8,8,5,7,6,0,1,8,4,1,0,7,0,7];
#card_number = [5,3,9,9,8,3,1,6,1,9,6,9,0,4,0,3];



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
	



print(atm_card_number(card_number))





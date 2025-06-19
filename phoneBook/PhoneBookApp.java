import java.util.Scanner;
import java.util.Arrays;
public class PhoneBookApp{
public void main(String[] args){
String mainMenu = """
	Welcome to Phone Book:
	press:
	
	1. Add contact
	2. Remove contact
	3. Find contact by phone number
	4. Find contact by first name 
	5. Find contact by last name
	6. Edit contact
	0. Exit
""";
boolean exit = True;
while(exit){
System.out.print(mainMenu);
String option = prompt();
switch(option){
	case "1":
		String firstName = prompt("Enter your firstName: ");
		String lastName = prompt("Enter your lastName: ");
		int phoneNumber = 0;
		boolean check = true;
		while(check){
			String number = prompt("Enter your phone number: ");
			if(checkPhone(number) == "phone number contains a letter>>"){
			System.out.print("phone number contains a letter>>");
			check = true;
			}
			else if(checkPhone(number) == "Invalid phone number>>"){
			System.out.print("Invalid phone number>>");
			check = true;
			}
			else{
			phoneNumber = checkPhone(number);
			System.out.print(addContact(firstName, lastName, phoneNumber) + " " + "Added Successfully");
			check = false;
			}

		}
		break;
	case "2":
		console.log(contactList);
		String removeNumber = prompt("Enter Phone number to Remove: ");
		System.out.print(removeContact(removeNumber));
		System.out.print(contactList);
		break;
	case "3":
		String findNumber = prompt("Find contact by phone number: ");
		System.out.print(findPhoneNumber(findNumber));
		break;
	case "4":
		String firstNameFind = prompt("Find contact by First Name: ");
		System.out.print(findFirstName(firstNameFind));
		break;
	case "5":
		String LastNameFind = prompt("Find contact by Last Name: ");
		System.out.print(findLastName(LastNameFind));
		break;
	case "6":
		String editMenu = """
		Enter Existing / New contact you wish to edit.
			Press:
			1. Enter first name 
			2. Enter last name
			3. Enter phone number
			0. <- Back
		""";
		String back = true;
		while(back){
		System.out.print(editMenu);
		String editOption = prompt();
		switch(editOption){
			case "1":
				String oldFirstName =  prompt("Enter existing First name you wish to edit: ");
				System.out.print(findFirstName(oldFirstName));
				String newFirstName =  prompt("Enter new First name: ");
				System.out.print(editFirstName(oldFirstName, newFirstName));
				break;
			case "2":
				String oldLastName =  prompt("Enter existing Last Name you wish to edit: ");
				System.out.print(findLastName(oldLastName));
				String newLastName =  prompt("Enter new Last Name: ");
				System.out.print(editLastName(oldLastName, newLastName));
				break;
			case "3":
				String oldPhoneNumber =  prompt("Enter existing Phone Number you wish to edit: ");
				System.out.print(findPhoneNumber(oldPhoneNumber));
				String newPhoneNumber =  prompt("Enter new Phone Number: ");
				System.out.print(editPhoneNumber(oldPhoneNumber, newPhoneNumber));
				break;		
			case "0":
				back = false;
				break;
		}
	} break;
		
	case '0':
		exit = False;

}
}
}

}
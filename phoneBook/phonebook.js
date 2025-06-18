const prompt = require('prompt-sync')();
let contactList = [];

function checkPhone(phoneNumber){
let numeric = /^\d+$/.test(phoneNumber);
if(numeric == false){
return "phone number contains a letter>>";
}
else if(phoneNumber.length > 11 | phoneNumber.length < 11){
return "Invalid phone number>>";
}
return phoneNumber;
}

function addContact(firstName, lastName, phoneNumber){
let contact = [firstName, lastName, phoneNumber];
contactList.push(contact);
return contact;
}

function removeContact(phoneNumber){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][2] === phoneNumber){
contactList.splice(count, 1);
return "Contact deleted successfully>>";
}
}
return "Contact not found";
}

function findPhoneNumber(phoneNumber){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][2] === phoneNumber){
return contactList[count];
}
}
return "Phone number not found>>";
}

function findFirstName(firstName){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][0] === firstName){
return contactList[count];
}
}
return "Name not found>>";
}

function findLastName(lastName){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][1] === lastName){
return contactList[count];
}
}
return "Name not found>>";
}


function editFirstName(oldValue, newValue){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][0] === oldValue){
contactList[count][0] = newValue;
return contactList[count];
}
}
return "Edit Unsuccessful";
}


function editLastName(oldValue, newValue){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][1] === oldValue){
contactList[count][1] = newValue;
return contactList[count];
}
}
return "Edit Unsuccessful";
}

function editPhoneNumber(oldValue, newValue){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][2] === oldValue){
contactList[count][2] = newValue;
return contactList[count];
}
}
return "Edit Unsuccessful";
}




let mainMenu = `
	Welcome to Phone Book:
	press:
	
	1. Add contact
	2. Remove contact
	3. Find contact by phone number
	4. Find contact by first name 
	5. Find contact by last name
	6. Edit contact
	0. Exit
`;
let exit = true;
while(exit){
console.log(mainMenu);
let option = prompt();
switch(option){
	case '1':
		let firstName = prompt("Enter your firstName: ");
		let lastName = prompt("Enter your lastName: ");
		let phoneNumber = 0;
		let check = true;
		while(check){
			let number = prompt("Enter your phone number: ");
			if(checkPhone(number) === "phone number contains a letter>>"){
			console.log("phone number contains a letter>>");
			check = true;
			}
			else if(checkPhone(number) === "Invalid phone number>>"){
			console.log("Invalid phone number>>");
			check = true;
			}
			else{
			phoneNumber = checkPhone(number);
			console.log(addContact(firstName, lastName, phoneNumber) + " " + "Added Successfully");
			check = false;
			}

		}
		break;
	case '2':
		console.log(contactList);
		let removeNumber = prompt("Enter Phone number to Remove: ");
		console.log(removeContact(removeNumber));
		console.log(contactList);
		break;
	case '3':
		let findNumber = prompt("Find contact by phone number: ");
		console.log(findPhoneNumber(findNumber));
		break;
	case '4':
		let firstNameFind = prompt("Find contact by First Name: ");
		console.log(findFirstName(firstNameFind));
		break;
	case '5':
		let LastNameFind = prompt("Find contact by Last Name: ");
		console.log(findLastName(LastNameFind));
		break;
	case '6':
		let editMenu = `
		Enter Existing / New contact you wish to edit.
			Press:
			1. Enter first name 
			2. Enter last name
			3. Enter phone number
			0. <- Back
		`;
		let back = true;
		while(back){
		console.log(editMenu);
		let editOption = prompt();
		switch(editOption){
			case '1':
				let oldFirstName =  prompt("Enter existing First name you wish to edit: ");
				console.log(findFirstName(oldFirstName));
				let newFirstName =  prompt("Enter new First name: ");
				console.log(editFirstName(oldFirstName, newFirstName));
				break;
			case '2':
				let oldLastName =  prompt("Enter existing Last Name you wish to edit: ");
				console.log(findLastName(oldLastName));
				let newLastName =  prompt("Enter new Last Name: ");
				console.log(editLastName(oldLastName, newLastName));
				break;
			case '3':
				let oldPhoneNumber =  prompt("Enter existing Phone Number you wish to edit: ");
				console.log(findPhoneNumber(oldPhoneNumber));
				let newPhoneNumber =  prompt("Enter new Phone Number: ");
				console.log(editPhoneNumber(oldPhoneNumber, newPhoneNumber));
				break;		
			case '0':
				back = false;
				break;
		}
	} break;
		
	case '0':
		exit = false;

}

}
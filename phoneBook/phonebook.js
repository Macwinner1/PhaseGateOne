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

function editContact(oldValue, newValue){
for(let count = 0; count < contactList.length; count++){
for(let counter = 0; counter < 3; counter++){
if(contactList[counter][0] === oldValue){
contactList.replace(contactList[counter][0], newValue);
return contactList[counter];
}
if(contactList[counter][1] === oldValue){
contactList.replace(contactList[counter][1], newValue);
return contactList[counter];
}
if(contactList[counter][2] === oldValue){
contactList.replace(contactList[counter][2], newValue);
return contactList[counter];
}
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
	/*case '6':*/;
	case '0':
		exit = false;






}



/*let firstName = prompt("Enter your firstName: ");
let lastName = prompt("Enter your lastName: ");
let phoneNumber = prompt("Enter your phone number: ");
console.log(AddContact(firstName, lastName, CheckPhone(phoneNumber)));
firstName = prompt("Enter your firstName: ");
lastName = prompt("Enter your lastName: ");
phoneNumber = prompt("Enter your phone number: ");
console.log(AddContact(firstName, lastName, CheckPhone(phoneNumber)));
let findNumber = prompt("Find phone number: ");
console.log(FindPhoneNumber(phoneNumber));


let findFirstName = prompt("Find first name: ");
console.log(FindFirstName(findFirstName));

let findLastName = prompt("Find last name: ");
console.log(FindLastName(findLastName));


let deleteNumber = prompt("Delete phone number: ");
console.log(RemoveContact(deleteNumber));
console.log(contactList);*/;

}
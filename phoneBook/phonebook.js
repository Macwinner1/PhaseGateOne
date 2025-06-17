const prompt = require('prompt-sync')();
let contactList = [];

function CheckPhone(phoneNumber){
let numeric = /^\d+$/.test(phoneNumber);
if(numeric == false){
return "phone number contains a letter>>";
}
else if(phoneNumber.length > 11 | phoneNumber.length < 11){
return "Invalid phone number>>";
}
return phoneNumber;
}

function AddContact(firstName, lastName, phoneNumber){
//let phoneNumber = CheckPhone(checkPhone);
let contact = [firstName, lastName, phoneNumber];
contactList.push(contact);
return contact;
}

function RemoveContact(phoneNumber){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][2] === phoneNumber){
contactList.splice(count, 1);
return "Contact deleted successfully>>";
}

return "Contact not found";
}

}

function FindPhoneNumber(phoneNumber){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][2] === phoneNumber){
return contactList[count];
}
}
return "Phone number not found>>";
}

function FindFirstName(firstName){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][0] === firstName){
return contactList[count];
}
}
return "Name not found>>";
}

function FindLastName(lastName){
for(let count = 0; count < contactList.length; count++){
if(contactList[count][1] === lastName){
return contactList[count];
}
}
return "Name not found>>";
}

function EditContact(old, new){
for(let count = 0; count < contactList.length; count++){
for(let counter = 0; counter < 3; counter++){
if(contactList[counter][0] === old){
contactList.replace(contactList[counter][0], new);
return contactList[counter];
}
if(contactList[counter][1] === old){
contactList.replace(contactList[counter][1], new);
return contactList[counter];
}
if(contactList[counter][2] === old){
contactList.replace(contactList[counter][2], new);
return contactList[counter];
}
}
}
return "Edit Unsuccessful";
}



let firstName = prompt("Enter your firstName: ");
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
console.log(contactList);

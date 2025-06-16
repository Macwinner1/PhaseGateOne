

purchaseList = []
names = " "
itemList = []
total = 0
subTotal = 0
billTotal = 0
discountAmount = 0
vat = 0
balance = 0
headTemplate = '''
SEMICOLON STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 08068853611
DATE : 
Cashier: {cashiersName}
Customer Name: {customersName}
======================================================
	ITEM	  QTY	  PRICE	  TOTAL(NGN)
------------------------------------------------------
'''

def nameList(customersName, cashiersName):
	names = headTemplate.replace("{customersName}", customersName).replace("{cashiersName}", cashiersName)
	return names

def ItemList(itemName, pieces, unitPrice):
	global itemList
	global purchaseList
	itemList[0].append(itemName)
	itemList[1] = pieces
	itemList[2] = unitPrice	
	itemList[3] = total
	purchaseList.append(itemList)

	return purchaseList


def calculateSubTotal(pieces , unitPrice):
	global subTotal
	total = unitPrice * pieces
	subTotal = subTotal + total
	return subTotal

def calculateDiscountAmount(subTotal, discount):
	discountAmount = subTotal * (discount / 100)
	return discountAmount


def calculateVat(subTotal):
	vat = subTotal * 0.075;
	return vat


def calculateBillTotal():
	billTotal = vat + (subTotal - discountAmount)
	return billTotal


def calculateBalance():
	if billTotal <= cashGiven:
		balance = cashGiven - billTotal

	else:
		return "payment is not complete"

	return balance




customersName = input("What is the customer's Name: ");

itemName = input("What did the customer buy: ");

pieces = int(input("How many pieces: "));

unitPrice = int(input("How much per unit: "));

cashiersName = input("What is your name: ");

discount = int(input("How much discount will he get: "));

cashGiven = int(input("How much did the customer give to you: "));


nameList(customersName, cashiersName);
calculateSubTotal(pieces , unitPrice);
calculateDiscountAmount(subTotal, discount);
ItemList(itemName, pieces, unitPrice);
calculateVat(subTotal);
calculateBillTotal();
calculateBalance();

print(names)
print(purchaseList.join(" "))
print(subTotal)
print(billTotal)
print(discountAmount)
print(vat)
print(balance)

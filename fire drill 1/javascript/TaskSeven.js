
for(let count = 1; count <= 10; count++){
if(count % 4 == 0){
let sum = 0;
for(let counter = 1; counter <= 5; counter++){
	sum += (Math.pow(count, counter));
}
console.log(sum + " ");
}

}


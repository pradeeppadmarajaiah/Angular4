//Import 
var calc = require('./calc.js');

//Calling doSum function
calc.doSum(23,35);

//Calling properties
console.log(calc.doTitle)

//Assigning using Js6 variables
let j=23;
const k=40;
console.log(j)
console.log(k)

//Difference between var and let

function doWork() {
	if(true) {
		var age= 40;
		console.log("Age " + age);
		
	}
	//Why it is allowed : NO Block scope feature. Variable is automatically available inside the block.
	console.log("Age outside " + age);
}


function doWork1() {
	if(true) {
		let age= 60;
		console.log("Age " + age);
		
	}
	//Use let keyword : if it is needed inside the scope. Below line will throw "Undefined"
	//console.log("Age outside " + age);
}

doWork();
doWork1();
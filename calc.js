var name="Pradeep calc"

function sum(a,b) {
	console.log("Sum is of two number is : " + (a+b));
}

function multiply(a,b) {
	console.log("Multiplication is of two number is : " + (a+b));
}


exports.doSum=sum
exports.doMultiply=multiply
exports.doTitle=name
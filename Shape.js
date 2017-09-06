class Shape{
	
	//No need to create a external variable at class level
	constructor(size){
		console.log("Inside the Shape class constructor");
		this.size=size;
	}
	
	draw(){
		console.log("Shape is drawn with size "+ this.size);
	}
	
	//Function keyword should not be used inside the class

	draw1(){
		console.log("Shape is drawn with size "+ this.size);
	}
	
}

exports.Shape=Shape;
// ES5
// function Greeting(){
//   this.worldHello = 'Hello';
// }

// Greeting.prototype.hello = function(name) {
// 	return this.worldHello + ' ' + name;
// }

// var greet = new Greeting();

// console.log(greet.hello('Pete'));

// ES6 
class Greeting {
	constructor(){
		this.worldHello = 'Hello';
	}

	hello(name) {
		return this.worldHello + ' ' + name;
	}
}

var greet = new Greeting();

console.log(greet.hello('Simpa'));




//Global Scope
//var firstFunction = function () {
	// firstFunction Scope
	//var secondFunction = function () {
		// secondFunction Scope
	//}
//}

/* (var Method)
function doSomething() {
	var num = 1;
	if (num >= 0) {
		var secondNum = 2;
		console.log("This is num", num);
		console.log("This is secondNum", secondNum);
	}
	console.log("This is num outside the if", num);
	console.log("This is secondNum outside the if", secondNum);
}

doSomething();
*/

/*
(let Method)
function doSomething2() {
	var num = 1;
	if (num >= 0) {
		let secondNum = 2;
		console.log("This is num", num);
		console.log("This is secondNum", secondNum);
	}
	console.log("This is num outside the if", num);
	console.log("This is secondNum outside the if", secondNum);
}

doSomething2();
*/

/*
(const Method)
function doSomething3() {
	const num = 1;
	num = 2;
	console.log(num);
}

doSomething3();
*/

/* (const in Object usage)
const user = {
	name: "Chicken",
	age: "15"
}

user.name = "Duck";
console.log(user);
*/

/*
function Person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
	this.orale = function() {
		return this.firstName + " " + this.lastName;
	}
}

//new Creates a new object based on the object created which is Person
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

myFather.name = function() {
	return this.firstName + " " + this.lastName;
}

console.log(myFather.name());
*/

/*
Person.prototype.name = function() {
	return this.firstName + " " + this.lastName;
};


console.log(myFather.orale());
*/

/* 
(Calling a function inside another function)
function callMe(string,alertMessage) {
	return alertMessage(string);
}

callMe('Kirk', function(string){
	alert(string + " Lazarus!");
})

// OR..

callMe
*/


/* (forEach vs. map)
var numbers = [1,2,3,4,5];

numbers.forEach(function(num){
	console.log(num);
})

// OR

numbers.map(function(num){
	console.log(num);
})
*/
 
/* (Add numbers within array)
console.log([0, 1, 2, 3, 4].reduce(
	function (
		accumulator,
		currentValue,
		currentIndex,
		array
	) {
		return accumulator + currentValue;
	}
));
*/

/*
var issues = [
	{
		"comments_count": 5,
		"id": 144948778,
	},
	{
		"comments_count": 1,
		"id": 143883618,	
	}
]


var commentCountAcrossIssues = issues.reduce(function(total, issue){
	return total + issue.comments_count;
}, 3);

console.log(commentCountAcrossIssues);


console.log(issues.filter(function(issue) {
	return issue.comments_count !== 1;
}))

// OR 

console.log(issues.filter => item.comments_count !== 1)
*/

/* (Bind)
let dog = {
	sound: 'woof',
	talk: function() {
		console.log(this.sound)
	}
}

//dog.talk();

let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(dog);

boundFunction();1`
*/

/*
var numbers = [1, 2, 3, 4, 5];

numbers.concat(9);

console.log("Original array ===>" + numbers);

var newNumber = numbers.concat(9);

console.log("New Number array ===>" + newNumber);
*/

/* (functions vs arrow function)
var add = function(x,y) {
	return x + y;
}

// OR

var add = (x,y) => {
	return x + y;
}



var studentList = function(students) {
	console.log(students);
}

studentList(["Joe", "Jerelyn", "Stephanie"]);

// OR

var studentList = (students) => console.log(students);

studentList(["Joe", "Jerelyn", "Stephanie"]);

const add = (a, b) => a+b;

// OR 

const add = (a, b) =>{ 
	console.log("Adding", a, "and", b);
	return a+b;
}
*/

var o1 = {a: 1};
var o2 = {b: 2};
var o3 = {c: 3};
var obj = Object.assign({}, o1, o2, o3);

console.log(o1, o2, o3, obj);
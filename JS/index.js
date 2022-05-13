//single line comment
/* multiline
comment*/

//variables...var, let...value can be changed
let name = 'blade';// declaration...=...initialization
console.log(name);//output on console
/* rules for naming variabls
- dont use reserved words(if,else,let...)
- must be meaningful to give clues for containt of variable
- cant start with a number(1,2,3,...)
- can't contain spaces or hiphen (-, )
- are case sensitive 
- recommended to declare variables in a single line*/

//constants...const...value of variable cant be changed after first initalization
const intrest = 22;//if we don't reassigne should be our default
//intrest =23; //won't be read
console.log(intrest);

/*types that can be assigned for variables
//primitive/ value types
- strings
- numbers
- booleans
- undifined
- null
- symbol*/

let word = 'word'; //string literal
let age = 23; //number literal
let approval = false; //boolean literal
let color = undefined;//used to decleare and not initialized...primitive
let height = null; //used to clear the value ...primitive

//js is a dynamic language ie variable type and content can be change at run time
/* -one type number ie no int, float etc
 - undefined can be both type and value*/

 /* reference variable type
 - object
 -array
 -functions*/

 /* object
 -used to contain morethan 1 type*/

 let person = {
     name1: 'blade',//diclare and initialize name1 as blade
     age1: 23
 };
//equivalent to c++ structure
 console.log(person);//displayed with object littral syntax

 //access the property
 //using dot notation...recomened since its easier and cleaner
 console.log(person.name1);//display specific propery name1
person.name1 = 'fox';//access the property name1

//using bracket notation
person['age1'] = 'lord';

console.log(person);

// referencing with a variable
let select = 'name1';
person [select] = 'lord';

console.log(person);

//arrays ... to store a list...is an object in js
let SelectedColors = ['red', 'blue'];//[] array litteral...ie empty array
console.log(SelectedColors);//log both elements as object literals
console.log(SelectedColors[0]);//log first element
SelectedColors[2] = 'gray';//add a 3rd element
console.log(SelectedColors);
console.log(SelectedColors.length);//show the amount of elements in the array

//functions...method in java function in c++

//function to perfome a task
function greet(){//declation of function
    console.log('hello world');//code area
}

greet();// calling a function

function Greet(fname, lname){// add parameters
    console.log('hello ' + fname + " " + lname); //referer to a parameters
}

Greet('blade' , 'godol');//add arguments to use in function
Greet('fox', 'lord');

//function to calculate a value

function square(number){
    return number*number;//gives a value when its function is called
}

let number = square(2);
console.log(number);


let x = 20;
while(x>0)
{
    alert(x);
    x--;    
}
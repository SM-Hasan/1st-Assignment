// ১. Variable কি ?

//  ans:- a variable is a value that can change, depending on conditions or on information passed to the program.

// ২. Variable কিভাবে লিখতে হয় ?
// ans:-
   var firstName = 'Sultan';
   var lastName = 'Mahmud';
   var age = 25;
// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?
// ans:- The value of a variable that uses a single quote, double quote or back tick is called a string type variable.
   var myFriendName = "Shimul";
   var myFatherName ='Azad Hossian';
   var myColor =`blue`;
// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?
// ans:- Variables that have integers or decimal numbers written in their values are called number type variables.without single quotes and double quotes
var number = 110;
var age = 25;

// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?
// ans:- Variables that have true or false written in  their values are call Booaln type variables.without single quotes and double quotes.
var isTrue = true;
var isFalse = false;

// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 
// ans:-
var myName = 'sultan mahmud';
var friendName = 'HASAN MAHMUD'

console.log(myName.toUpperCase());
console.log(friendName.toLocaleLowerCase());

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?
// ans:- There are four type of JavaScript Operators:
// 1. Assignment operator: =,+=,-=,*=,/*,%=,**=
// 2. Arithmetic Operators: +,-,*,/,%,++,--
// 3. Comparison Operators: ==,===,!=,!==,>,<,>=,<=,?
// 4. Logical Operators: &&,||,!

// ৮. Math.abs() এর ব্যাবহার লিখুন । 
// ans:-
var num5 = -23234;
console.log(Math.abs(num5));

// ৯. Math.celi()  এর ব্যাবহার লিখুন । 
// ans:-
var num6 = 12.5656745;
var num8 = 12.33434;
console.log(Math.ceil(num6));
console.log(Math.ceil(num8))

// ১০. Math.Floor() এর ব্যাবহার লিখুন । 
var num4 = 0.9999999
console.log(Math.floor(num4))
// ১১. Math.round() এর ব্যাবহার লিখুন ।
// ans:-
var num2 = 0.5;
var num3 = 0.4444449;
console.log(Math.round(num2));
console.log(Math.round(num3))
// ১২. Math.random() এর ব্যাবহার লিখুন ।
// ans:-
var luckyNumber = 69;
var myNumber = Math.floor(Math.random()*100);
console.log(myNumber);
// asignment.js - GitHub Link 
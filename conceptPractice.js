// LET AND VAR DIFFERENCE PRACTICE

let testfunction = function() {
    {
        var x = "default";
        let y = "default";
    }
    try {
        console.log(x); // this works because var is available function wide
        console.log(y); // undefined because let is only scoped to the block
      } catch (error) {
        console.error(error);
      }
}

testfunction();

// ARRAY MANIPULATION PRACTICE
var letterArray = [ 'a', 'b', 'c', 'd', 'e' ];

letterArray.push("end");
letterArray.unshift("start");

// Practicing Writing answers out to the DOM
var node = document.createTextNode(letterArray.toString());
var display = document.getElementById("arraymanipulation");
display.appendChild(node);

// ES6 VERSION
var es6Array = [ 'a', 'b', 'c', 'd', 'e' ];
myArray = ["Start",...es6Array, "End"];
console.log(es6Array);

// Can easilly use Sets to do this also, but wanted to code it out
// Simple remove duplicates Function without a FOR loop
let nums = [1, 2, 2, 3, 3, 4, 5, 6, 6, 6, 6, 7, 7, 8 ];

let uniqueArray = nums.filter((c, index) => {   
    return nums.indexOf(c) === index;
});

console.log( "UNIQUE ARRAY");
console.log( uniqueArray );

// BASIC VARIABLE SCOPE PRACTICE
// PRACTICE RUN 2

function secretVariable(){
    var private = "topfunctionscopevariable";
    return function() {
        return private
    }
}


// Does not work because private is not in scope when calling the function directly
console.log(secretVariable());
// Works because it runs the top function first which then calls the anonymous function
var privateVariableScopeCheck = secretVariable();
console.log(secretVariable()());
// Also Works
var privateVariableScopeCheck = secretVariable();
console.log(privateVariableScopeCheck());

// BASIC CLOSURE PRACTICE
var x = 4;
function outer() {
    var x = 2
    function inner(){
        x++;
        // x is still undefined here
        console.log("inner output" + x)
        var x = 3;
        // x is redclared here so its value is taken from this innter function
        console.log("inner output after declaration" + x)
    }
    inner();
}
outer();
// x is declared inside the function but is discarded after use, so original declaration is
console.log( "outter output" + x)

//VARIABLE TYPING
// Order of operations. typeof integer 1 returns the string number, type of "number" returns string
console.log( typeof typeof 1);

// Testing scope again with a different example
var person = {
    _name: 'David Smith',
    getInfo: function (){
        return this._name;
    }
};
var someInfo = person.getInfo;
// Error state (undeinfed) : In this instance the function does not have access to name to return it
console.log(someInfo());
// In this instance we bind person to the function so that it has access to variable _name when it is called
var someInfo = person.getInfo.bind(person);
console.log( someInfo() );
// This works because we call the method with person
console.log( person.getInfo() );



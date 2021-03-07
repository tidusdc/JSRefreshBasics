// PRACTICE RUN 1 test
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

// PRACTICE RUN 2
function secretVariable(){
    var private = "topfunctionscopevariable";
    return function() {
        return private
    }
}


// BASIC VARIABLE SCOPE PRACTICE

// Does not work
var privateVariableScopeCheck = secretVariable();
console.log(secretVariable());
// Works
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
        // x value is taken from the outer function declartion not the global variable
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
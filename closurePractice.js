// SIMPLE EXAMPLE

var passed = 3;
var addTo = function(passed) {
    var inner = 2;
    return passed + inner;
}

// Output the function
console.dir(addTo);


// ANOTHER EXAMPLE with nested functions
let outerFunction = function(passed) {
    let add = function(inner) {
        return passed + inner;
    };
    return add;
};

let addThree = outerFunction(3);
let addFour = outerFunction(4);

// This will log the ineer function
console.log( addThree.toString());
// This will call the outter function set to variable addThree and pass 6 to the ineer function
console.log(addThree(6));
console.log("---------------------")

// CLOSURE WITH CONDITIONALS

let functiontest = () => {
    let i = 1;
    let y = 2;
    return () => {
        console.log(i + y);
    }
};
// Console dir is used to show that i=1 is within the block of functiontest
console.dir(functiontest() );
// This will log out 1

for( let i = 0; i<3; i++ ) {
    (function test() {
        console.log(i);
        // This will log 1, 2, 3
    })();
}
console.log('Execution code exists after loop');

//Difference between var and let

console.log("----------------------");

for( var i = 0; i<3; i++ ) {
    console.log("Loop iteration" + i);
    setTimeout( () => {
        console.log(i + "Test");
        // This will log 3 because var i is function scoped
    }, 1000);
}
console.log('Execution code exists after loop');




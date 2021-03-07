function y() {
    console.log( this.legnth );


var x = {
    length: 5,
    method: function(y) {
        arguments[0]();
    }
};

x.method(y, 1);

// ----------------------------

const x = 'constructor'
console.log(x[x](01));

// ----------------------------
// function return total number of arguements with no loops

//Rewriete this block of code to print x, y, z
var A = {
    x: function() {
        console.log('x');
        return A;
    },
    y: function() {
        console.log('y');
        return A;
    },
    z: function() {
        console.log('z');
        return A;
    }
}

A.x().y().z();



}

//---------------------
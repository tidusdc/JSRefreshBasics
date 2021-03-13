let word = "hellosomething";

let reverseString = function( word ) {
 
    return word.split('').reverse().join('');
}
console.log( reverseString(word));

const obj = {
    a:1,
    b:2,
    getA(){
        console.log(this.a);
        return this;
    },
    getB(){
        console.log(this.b);
        return this;
    }
};

obj.getA().getB();


const arr1 = [1,2,5,7,9,66,77,78,93,100,102,999,1000];
const arr2 = [2,5,7,12];

//merge arrays

function mergeArrays( arr1, arr2 ) {
    let x = 0;
    let y = 0;
    let arr3 = [];
    let finalsize = arr1.length + arr2.length;
    
    while( arr3.length < finalsize ) {
        if ( arr1[x] < arr2[y] ) {
            arr3.push(arr1[x]);
            x++;
        } else if (arr1[x] == arr2[y] ) {
            arr3.push(arr1[x]);
            arr3.push(arr2[y]);
            x++;
            y++;
        } else if( arr1[x] > arr2[y] ) {
            arr3.push(arr2[y]);
            y++;
        }  else if( y > ( arr2.length -1 ) ) {
            arr3.push(arr1[x]);
            x++;
        } else if( x > ( arr1.length -1 ) ) {
            arr3.push(arr2[y]);
            y++;
        }
    }
    return arr3;
}

console.dir(mergeArrays( arr1, arr2 ));




var x = function() {
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    }, 1 )
};

var xx = new x();




let i = 'i love javaScript';

//return reverse
//'tpircSavaj evol i'

let rts = str.split("").reverse().join("");
console.log(rts);

let num = 1234; //len = 4 
const num = 0295; //len = 4

function findLengthOfNumber(number) {


}
var count = (function (){ 
    // x is only available in the scope of count
    var x = 0;
    return {
        // These are then treated like private functions. They can only be called via the count object
        get: function() {
            return x;
        },
        set: function(value) {
            x = value;
        },
        increment : function() {
            x++;
        }
    }
})();
// Retunrs 0
console.log(count.get());
// Must call count's method set to work
count.set(5);
count.increment();
// Will output 6 here
console.log(count.get());

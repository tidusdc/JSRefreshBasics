// Practice with Promises

let promiseToCleanTheDishes = new Promise(function(resolve, reject) {
    // Clean the dishes

    let dishesCleaned = false;

    if( dishesCleaned ) {
        resolve('Cleaned');
    } else {
        reject('Dirty');
    }

});

promiseToCleanTheDishes.then( function( resolveParam ) {
    console.log('the room is ' +  resolveParam );
    console.log("----------------------------");

}).catch( function( rejectParam ) {
    console.log('the room is ' + rejectParam );
    console.log("----------------------------");
});



// Promises with dependencies

let tidyRoom = function() {
    return new Promise( function(resolve, reject ) {
        resolve( 'Dishes are clean ');
    });
};

let changeSheets = function( message ) {
    return new Promise( function(resolve, reject ) {
        resolve( message + "Sheets are cleaned");
    });
};


let wifeHappy = function( message ) {
    return new Promise( function(resolve, reject ) {
        resolve( message + "The wife is happy");
    });
};

// Having each promise depend on the one before it
tidyRoom().then( function( result ) {
    return changeSheets( result );
}).then(function( result ) {
    return wifeHappy( result );
}).then( function( result ) {
    console.log("All promises complete" + result);
})

// Should output All promises complete Dishes are clean Sheets are cleaned The wife is happy

Promise.all( [ tidyRoom(), changeSheets(), wifeHappy() ]).then( function(result) {
    console.log( "All tasks completed at the same time " + result);
})

/// Any promise is complete
Promise.race( [ tidyRoom(), changeSheets(), wifeHappy() ]).then( function(result) {
    console.log( "One promise has been completed " + result);
})


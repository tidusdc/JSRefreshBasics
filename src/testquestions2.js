let data = {
    key: "value"
};

fetch('http://zcolin.369usa.com/a.php'
    , {
    method: 'get',
    body: JSON.stringify(data)
}).then(data => {
    console.log(data);
    // data is anything returned by your API/backend code
});


/*
const promise2 = new Promise((resolve) => {

});
const promise3 = new Promise((resolve) => {


});

*/


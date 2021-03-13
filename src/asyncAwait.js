



// Waiting to get on an amusement park ride 
console.log(" person1: ride roller coaster");
console.log(" person2: ride roller coaster");

const preRide = async() => {
    const promiseBringingTickets = new Promise((resolve, reject ) => {
        setTimeout(() => resolve('ride the roller coaster'), 3000 );
    });
    const getHotDog = new Promise((resolve, reject) => resolve(`hot dog`));
    const getDrink = new Promise((resolve, reject) => resolve(`got drink`));

    let tickets;
    try {
        tickets = await promiseBringingTickets; 
    } catch (e) {
        tickets = "no tickets were obtained";
        return tickets;

    }
    // This line is dependant on the promise finishing
    let food = await getHotDog; 
    console.log(`Got the food ${food}`);

    let [hotdog , drink] = await Promise.all( [getHotDog , getDrink] );
    console.log(`${hotdog} ${drink}`);

    return tickets;

}


preRide().then((m) => console.log(m));


console.log(" person4: ride roller coaster");
console.log(" person5: ride roller coaster");



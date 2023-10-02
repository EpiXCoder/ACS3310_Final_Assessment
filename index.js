const D = require('js-date-fairy');
// import D from 'js-date-fairy';
// import * as D from 'js-date-fairy';
// import * as stringamabob from 'stringamabob';
const stringamabob = require('stringamabob');

// Challenge 0

const data = require('./data.json');

// console.log(data);

// Challenge 1
// Doing this for first 10 people
data.slice(0, 10).forEach(person => {
    let fullName = stringamabob.capitalizeWords(`${person.first_name} ${person.last_name}`)
    console.log(fullName);
});

// Challenge 2
data.slice(0, 10).forEach(person => {
    let dateObj = new D(person.purchased);
    let purchaseDate = dateObj.format('M d, Y')
    console.log('Purchased: ' + purchaseDate);
});

// Challenge 3
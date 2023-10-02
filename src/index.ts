// import * as D from 'js-date-fairy';
import D from 'js-date-fairy';
import * as stringamabob from 'stringamabob';
import formatPhoneNumber from './functions';
import data from './data.json';

interface Person {
  id: number;
  first_name: string;
  last_name: string;
  purchased: string; // or Date if parsed it
  lastpayment: string; // or Date if parsed it
  phone: string; // or number, depending on the data format
  make: string;
  model: string;
  city: string;
}

// Challenge 1
data.slice(0, 10).forEach((person: Person) => {
  const fullName = stringamabob.capitalizeWords(`${person.first_name} ${person.last_name}`);
  console.log(fullName);
});

// Challenge 2
data.slice(0, 10).forEach((person: Person) => {
  const dateObj = new D(person.purchased);
  const purchaseDate = dateObj.format('M d, Y');
  console.log(`Purchased: ${purchaseDate}`);
});

// Challenge 3
data.slice(0, 10).forEach((person: Person) => {
  const dateObj = new D(person.lastpayment);
  const lastPayment = dateObj.when();
  console.log(`Last Payment: ${lastPayment}`);
});

// Challenge 4
data.slice(0, 10).forEach((person: Person) => {
  const phoneNumber = formatPhoneNumber(person.phone);
  console.log(phoneNumber);
});

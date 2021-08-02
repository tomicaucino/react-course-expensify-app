// const person = {

//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };


// const { name: firstName = 'Tomas', age } = person;
// // const name = person.name;
// const { city, temp: temperature } = person.location; 

// console.log(`${firstName} is ${age}.`)

// if (temperature && city) { 
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published' } = book.publisher; 

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania','19147' ]; 

const [, city, state = "New York" ] = address;

console.log(`You are in ${city} ${state}`)


const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [ itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)
export const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 3, name: 'Jim Smith', email: 'jim@example.com' },
];

// customers.forEach((customers, index) => {

  // console.log(index,customers.id,customers.email);
  
// })


//for in return  undefine

// for (let customer in customers) {

  // console.log(customer.id);
  
// }

//for of loop
// 
// for (let customer of customers) {
  // console.log(customer.name);
// }

// map

// customers.map((customers) => {

  // console.log(customers.id);
  
// })

//filter 

// let customer=customers.filter((customers) => {

  // return customers.name=='John Doe'
  
// })

// console.log(customer);


// reduce method

const user = [1,2,3,4,5,67,8,9]

user.reduce((num,value) => {

  return user + value;

  // console.log(user);
  
})


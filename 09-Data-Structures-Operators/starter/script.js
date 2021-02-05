'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1
});

//* ////////////////////////////////////////////
//* Destructuring an array
// const array = [1,2,3];
// const [x, y, z] = array;
// console.log(x, y, z);

//* extract the first two positions of a array
// const [first, second] = restaurant.categories;
// console.log(first, second);

//* extract the first and third positions of a array
// const [first, , third] = restaurant.categories;
// console.log(first, third);

//* switch the first with the third position of a array
// let [main, , secondary] = restaurant.categories;
// [main, secondary] = [secondary, main]
// console.log(main, secondary);

//* receive two return values from a function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

//* Nested destructuring - Destrucutring an array inside an array
// const nested = [2, 4, [5, 6]];
// const [i, , [j , k]] = nested;
// console.log(i, j, k);

//* Default values
// const [p = 0, q = 0, r = 0] = [8, 9];
// console.log(p, q, r);


//* ////////////////////////////////////////////
//* Destructuring an object
// const {name, categories, openingHours} = restaurant;
// console.log(name, categories, openingHours);

//* Change the variable names in destructuring
// const {name: restaurantName, categories: tags, openingHours: hours} = restaurant;
// console.log(restaurantName, tags, hours);

//* Default values
// const { menu = [], starterMenu: starters = {}} = restaurant;
// console.log(menu, starters);

//* Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 12, b: 123, c: 1234 };
//! using the parenteses it overrides the previous variables
// ({ a, b } = obj);
// console.log(a,b);

//* Nested Objects
// const { fri: { open, close } } = restaurant.openingHours;
// console.log(open, close);
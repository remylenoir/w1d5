const numbArr = [2, 4, 5];
const citiesArr = ["Berlin", "Beijing", "Bangkok", "Budapest"];

// FOR EACH

numbArr.forEach(function(el, i, array) {
  console.log("Index", i, "=", el, "> times 2 =", el * 2);
});

console.log("");

// Alternative
function iterate(el, i, array) {
  console.log(i, el);
}
numbArr.forEach(iterate);

// MAP

console.log("");

const firstLetterArr = citiesArr.map(function(el, i, array) {
  return el[0];
});
console.log(firstLetterArr);

console.log("");

const expoNumb = numbArr.map(function(el, i, array) {
  return 2 ** el;
});
console.log(expoNumb);
console.log("");

// Arrow function alternative
const newNum = numbArr.map(el => 2 ** el);
console.log(newNum);

const myArr = [1, 15, 27, 8];
const evenNumb = myArr.find(function(el, i, array) {
  if (el % 2 === 0) {
    return el;
  }
});
console.log(evenNumb);

console.log("");

//

const cities = [
  {
    name: "Los Angeles",
    country: "U.S."
  },
  {
    name: "Toronto",
    country: "Canada"
  },
  {
    name: "Montreal",
    country: "Canada"
  },
  {
    name: "Ciudad de Mexico",
    country: "Mexico"
  },
  {
    name: "Miami",
    country: "U.S."
  },
  {
    name: "New York",
    country: "U.S."
  },
  {
    name: "Tijuana",
    country: "Mexico"
  },
  {
    name: "Vancouver",
    country: "Canada"
  }
];

// Get all cities in Canada
const canadaCities = cities
  .filter(findCanada => findCanada.country === "Canada")
  .map(cityObject => cityObject.name);
console.log(canadaCities);

// Get all cities that includes a " " (space)
const spaceCities = cities.filter(citySpace => citySpace.name.includes(" "));
console.log(spaceCities);

// Order values by ALPHA order with localeCompare()
cities.sort(function(a, b) {
  return a.country.localeCompare(b.country);
});
// Arrow function alternative
// cities.sort((a, b) => a.country.localeCompare(b.country));
console.log(cities);

// Order and group numbers by even/odd
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.sort(function(a, b) {
  if (a % 2 === b % 2) return 0;
  else if (a % 2 > b % 2) return -1;
  else return 1;
});
// Arrow function alternative
// nums.sort((a, b) => {
//   if (a % 2 === b % 2) return 0;
//   else if (a % 2 < b % 2) return -1;
//   else return 1;
// });
console.log(nums);

// Short condtion statement
// const a = condition ? true : false

// Sum values of an array
const sum = nums.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(sum);

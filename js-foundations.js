// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

num => {
  num % 3 === 0 ? console.log(`${num} is divisible by three`) : console.log(`${num} is not divisible by three`)
}

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

//First iteration with function outside of object
const helloMe = {
  first_name: "Matt",
  last_name: "Au",
  height: "60in",
  weight: "190lbs",
}

const myDesc = (obj) => {
  return Object.values(obj)
}
console.log(myDesc(helloMe));

//Second iteration with function within object


// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

const groceries = ["eggs", "sausages", "milk", "bread", "kombucha"]
const newList = arr => {
  return groceries.filter(val=>{
    return arr.indexOf(val) % 2 === 0
  })
}
console.log(newList(groceries))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

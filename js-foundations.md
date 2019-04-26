# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
  numbers - primitive
  strings - primitive
  booleans - primitive
  null - primitive
  NaN - primitive
  array
  function
  object
  class
  loop
  method

2. What's the difference between =, ==, and === in JavaScript?
  A single = is used as an assignment operator. This simply means that you're assigning value to something. For example, you're assigning a value to a variable.

  A double == means about equal to. In other words, it will look at the primitive values. For example, '7' == 7 will evaluate as true.

  A triple === means strictly equal to. In other words, are the two values EXACTLY equal?

3. What is the difference between an array's index and length?
  An array's index is the position that the value occupies within the array. An array's length is the number of values within the array. The BIG difference is counting. When counting index positions, you start with 0, but when counting the number of values in an array (length) you start with 1.

4. What are the three parts of a for loop?
  Within the parentheses of a for loop, you need an initialization value, the end value and an instruction of how you'd like to iterate. In reference to the last element, a more specific explanation for the operator being used would either be an increment or decrement, for simple cases.

  E.g. for (i=0; i<arr.length; i++) {}

5. What is a function's declaration, argument, and call?
  A function's declaration is the naming portion of the function. In other words, what you'd like your function to be called. The argument is simply a placeholder for any future values you intend to pass through the function. This value will be used within the function body. A function call is how you would utilize a function after its creation. Functions can be called in a variety of ways, such as but not limited to, logging it, returning it, or even passing it into another function.

6. What are the three main steps in saving work to github?
  git status - checks to see if you have any unadded changes
  git add . - updates changes
  git commit - allows for commenting on what you changed/updated
  git push - pushes the file up to github

7. What is the terminal command to move directories?
  cd "dirName" - allows you to move into a specified directory
  cd ~ - pops you out to your specified User (e.g. /User/Matt)
  cd .. - pops you out one directory level

8. Do you have a suggestion for a Check In question?
  What is your favorite brand of sucks?

9. What was your favorite topic this week?
  My favorite topic this week was classes and class inheritance because that is the topic that I have the least experience in. I like to work on any and all weaknesses I have in order to develop my skillset in a holistic-sense.

10. What was your "A-ha!" moment this week?
  My "A-ha!" moment this week was working with classes, specifically inheritance. In the situation where you have a grandparent, parent and child, the child's super() portion needs to include all the arguments from its immediate parent and NOT the grandparent (in the instance that you may have added arguments to the parent). It was extremely satisfying and allowed me to solidify more of a baseline knowledge of classes and inheritance, especially before getting into React where we will be revisiting the topic again.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
Without checking the function with node, I believe the function will log 'outside' then behind the scenes it will reassign the value of text to 'inside'. If text was logged immediately after the function log it should then log 'inside'.

2. What is JSON? How does it relate to javascript objects?
  JSON stands for JavaScript Object Notation and it specifies a specific syntax for how to deal with objects and classes.

3. Describe a closure, what is it good for and how do you recognize one?
  IDK

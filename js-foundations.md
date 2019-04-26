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

6. What are the three main steps in saving work to github?

7. What is the terminal command to move directories?

8. Do you have a suggestion for a Check In question?

9. What was your favorite topic this week?

10. What was your "A-ha!" moment this week?

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

2. What is JSON? How does it relate to javascript objects?

3. Describe a closure, what is it good for and how do you recognize one?

const numbers = [21, 37, 64, 99, 142];

const negatives = numbers.map(function (num) {
  return num * -1;
});

/* This technically works, BUT the point of using map is to return a same sized array
   Logs 42 74 128 198 284 but running doubles in the console returns an array
   [undefined, undefined, undefined, undefined, undefined ] 
   Use forEach if no retruned array is needed  
*/
const doubles = numbers.map(function (num) {
  console.log(num * 2);
});

const todos = [
  { id: 1, text: "walk the dog", priority: "high" },
  { id: 2, text: "walk the chickens", priority: "medium" },
  { id: 3, text: "feed the cats", priority: "low" },
  { id: 4, text: "put out fire in my garage", priority: "very high" },
];

/* 
    Both functions return the same data:
        The first uses the individual element (todo) as the paramenter of the anonymous function
        The second uses an arrow function, using the destructured {text} object for the parameter of an arrow function
*/

const todoText = todos.map(function (todo) {
  return todo.text;
});

const todoText2 = todos.map(({ text }) => {
  return text;
});

/* 
    Custom map function 
        Accept an array and a callback function
            The function should be passed three arguments (value, index, array)
            Create a new array
            Loop over the array for each item in the array
            Push the updated value to the new array
            Return a new array with updated elements
*/

function myMap(arr, callback) {
    const mappedArray =[];
    /*  
        Takes the current element (arr[i]).
        Passes it into the callback function.
        The callback returns a new value.
        That value is added (push) to mappedArray. 
    */
    for (let i=0; i <arr.length; i++) {
        // This extra result step passes all three items, value, index and array back to the new array.
        const result = callback(arr[i], i, arr); 
        mappedArray.push(result);
    }

    // Return the updated array
    return mappedArray;
}

// Updated to handle all three arguments like map
const priorityMap = myMap(todos, function(todo, index, array) {
  return `${index + 1}. ${todo.priority.toUpperCase()}`;
});
// Same result as above 
const priorityMap2 = myMap(todos, ({priority}, index, array) => {
    return `${index + 1}. ${priority.toUpperCase()}`;
});
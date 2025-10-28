const nums = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85];

let total = 0;
for (let num of nums) {
  total += num;
}
console.log(total);

let min = nums[0];
for (i = 1; i < nums.length; i++) {
  if (nums[i] < min) min = nums[i];
}
console.log(min);

const str = "lollapalooza";
const letterCount = {};
for (let char of str) {
  if (letterCount[char]) {
    letterCount[char] += 1;
  } else {
    letterCount[char] = 1;
  }
  /* 
        Cleaner way || - Returns the first truthy value, so if letterCount[char] is found in the array return that else the zero
        letterCount[char] = (letterCount[char] || 0) + 1;
  */
}
console.log(letterCount);

/*
    Reduce - returns a single item
    Two paramenters (function, parm2) 
        function 
            accumulator - is always arr[0] and used to store value, such as min/max, a string, a number
            nextValue - starts off as arr[1], then increases with each iteration; UNLESS the second parm is included so then starts at arr[0]
            returns the accumulator 

        parm2
            Initializes the accumulator to a specific value
*/
let evens = [2,4,6,8,10,12];
 const result = evens.reduce(function (accumulator, nextValue) {
    return accumulator + nextValue;
 });
 console.log(result);

 const words = ['hello', 'i', 'love', 'you'];
 const x = words.reduce(function (str, word){
    return str + " " + word;
 })
 console.log(x);

 const midtermScores = [70,88,93,94,64,62,56];
 const y = midtermScores.reduce(function (min, nextNum) {
    return min < nextNum ? min : nextNum;
 });
 console.log(y);
let arr = [0, 1]

function fibonacci(n) {
  if(n <= 2){
    return n;
  };

  if (arr.length === n + 1) {
    return arr[n]
  } else {
    let value = arr[arr.length - 2] + arr[arr.length - 1]
    arr.push(value)
    console.log(arr)
    return fibonacci(n)
  }  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;


// Write a funciton that accepts an integer n as an argument and returns the nth integer of the fibonacci series with recursion (function that calls itself)


// Please add your pseudocode to this file
// 1. Create first base case = if n is less than 2, return n. 
// 2. initialize an array with first two values of fibbonaci series [0, 1]
// 3. if n === arr.length return arr[n]
// 4. else add last two elements of array and push to end. 
// 5. recall the method. 

// And a written explanation of your solution
// I created the base case where if n is 1 or 2, it simply returns n. I initialized a fibbonaci array outside of the function. The next base case is where n is equal to the array le
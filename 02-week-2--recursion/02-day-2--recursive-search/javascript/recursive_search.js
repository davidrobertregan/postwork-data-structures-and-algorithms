function recursiveSearch(arr, target) { 
  if(arr[0] === target){
    return true;
  } 

  if(arr.length === 0) {
    return false;
  }
  arr.shift()
  return recursiveSearch(arr, target)

  // if(arr.length > 0) {
  //   return "true"
  // } else {
  //   return "false"
  // } 
}

// should probably use nondestructive array methods for these..

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;


// UNDERSTAND
// Create  a recursive method that accepts an array and a target value. if the target value is in the array, the method will return true and vice versa

// Please add your pseudocode to this file
// init a variable i = 0
// base case is when i = arr.length OR if arr[i] === target
// see if arr[i] matches the target value. If it does, return true and stop the method.
// What is the base case? 
// And a written explanation of your solution

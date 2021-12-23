function rotateArray(arr, k) {

  for(let i = 0; i < k; i++){
    arr.unshift(arr.pop())
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("Expecting: [4, 5, 6, 7, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4, 5, 6, 7], 4));

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("Expecting: [2, 1]")
  console.log("=>", rotateArray([1, 2], 3));
}

module.exports = rotateArray;

// create a method that takes an array and a positive integer as an argument that shifts the elements in that array that amount of times
// Please add your pseudocode to this file
// I need to adjust the index of each element.... increasing it k number of times... unless that index goes above the array length, then we need to loop it back to the front.
// loop the array and add 

// And a written explanation of your solution

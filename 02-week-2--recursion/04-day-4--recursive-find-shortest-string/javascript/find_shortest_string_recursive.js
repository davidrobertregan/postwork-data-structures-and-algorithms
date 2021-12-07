function findShortestStringRecursive(arr) {
  if(arr.length === 1){
    return arr[0]
  }

  if(arr[0].length <= arr[1].length){
    arr.splice(1, 1)
  } else {
    arr.splice(0, 1)
  }
  return findShortestStringRecursive(arr)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'wo', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;


// Create a recursive function that accepts an array of strings as an argument and return the shortest string in that array. Tie goes to the lower index. 

// Please add your pseudocode to this file

// What is the base case? When the array is one element
// If not, we're gonna take the string length of the first element in the array and then remove that first element. 


// And a written explanation of your solution

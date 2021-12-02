function findShortestString(arr) {
  let lengthArr = []

  for(e of arr){
    lengthArr.push(e.length)
  }

  let min = Math.min(...lengthArr)
  let idx = lengthArr.indexOf(min)
  return arr[idx]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE

  const startTime = Date.now()

  for(let i = 0; i < 1000; i++){
    findShortestString(["ddd", "adsfas", "asdfa", "aa", "b"])
  }

  const avgTime = (Date.now() - startTime)/1000
  console.log(avgTime)
}

module.exports = findShortestString;

// Please add your pseudocode to this file

// UNDERSTAND 
// Receive an array fo strings, return the string with the least amount of characters - tie goes to the one with lower index

// PSUEDO CODE
// loop through the array and create a new array with the string length. 
// we'll then find the index of the minimum number and use that index to return the element in the original array


// And a written explanation of your solution
// 1. Initialize an array that will hold the string lengths
// 2. Loop through arr of strings and push the string length at each iteration
// 3. Use Math.min to find the minimum number in that array
// 4. Use index of to find the index of that minimum element
// 5. use the same index to return the element in arr of strings
function selectionSortRecursive(arr) {
  if(arr.length === 0){
    return []
  }

  let min = Math.min(...arr)
  let idx = arr.indexOf(min)
  arr.splice(idx, 1)

  const result = selectionSortRecursive(arr)

  result.unshift(min)
  return result

  // got stuck on this one :/ but learned a little more
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("Expecting: [-50, 2, 10, 50, 200, 221]");
  console.log("=>", selectionSortRecursive([10, 221, 50, 200, -50, 2]));

  console.log("Expecting: [10]");
  console.log("=>", selectionSortRecursive([10]));

  console.log("");
}

module.exports = selectionSortRecursive;


// Create a recursive function that accepts an array of numbers and returns a resorted array based on their value


// Please add your pseudocode to this file
// Basecase: array only has one element - then we'll just return that array
// find the minimum value in array.
// Create a new array without that value;
// Recall method with new array

// And a written explanation of your solution

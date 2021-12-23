function distinctPairSum(arr, k) {
  let pairsArr = []
  
  for(let i = 0; i < arr.length; i++){
    let sum = arr[i] + arr[i + 1]
    if(sum === k){
      pairsArr.unshift([arr[i], arr[i + 1]])
      }
    }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// create a method that takes two arguments. array, number k;
// return all array element distinct pairs that add up to number k.
// return an array of pair arrays

// initialize a pairArr
// loop through the array and add adjacent elements at each iteration.
// if sum === k, add to pair arr; if not continue


// And a written explanation of your solution

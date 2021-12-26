function distinctPairSum(arr, k) {
  let pairsArr = []
  let matchArr = []
  
  for(let i = 0; i < arr.length; i++){
    let sum = arr[i] + arr[i + 1]
    let sumArr = [arr[i], arr[i + 1]]
    if(sum === k){
      for(let i = 0; i < pairsArr.length; i++){
        if(pairsArr[i][0] === sumArr[0] || sumArr[1] && pairsArr[i][1] === sumArr[0] || sumArr[1]){
          matchArr.push("match")
        }
      }
      if(matchArr.length === 0){
        pairsArr.unshift([arr[i], arr[i + 1]])
        }
      } 
  }
  return pairsArr
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
// first I initialize a new array where we will store pairs. Then we create a for loop where we add the sibling elements in our array to check if they add up to the targeted sum. If they do, we then loop through the Pairs array to check for matches using logical operators. We need to see if the first element in the array of the pairsArr is equal to either the first or second value of the pair we just grabbed. 

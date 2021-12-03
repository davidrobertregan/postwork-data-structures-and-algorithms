function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; i++) {
      if(arr[j + 1] < arr[j]){
        [arr[j +1 ], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2, 10, 1, 4, 11]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution


// function that takes an arr of numbers as an argument
// functoon returns the array sorted by value starting with the lowest

// use for loop to loop through array and use index to sort
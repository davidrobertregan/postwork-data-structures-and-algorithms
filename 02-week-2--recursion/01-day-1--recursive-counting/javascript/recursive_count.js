function recursiveCount(num = 0) {
  if(num > 9){
    return "done"
  } else {
    num += 1
    console.log(num)
    recursiveCount(num)
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// create a recursive method that counts and prints numbers 0 - 9.

// Please add your pseudocode to this file
// create a base case (when the method stops) => return done if num > 9
// if base case is not true increment the number and print it
// recall the method with the new number value


// And a written explanation of your solution

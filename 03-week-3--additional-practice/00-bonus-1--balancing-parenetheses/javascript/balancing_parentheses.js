function balancingParentheses(string) {
  let arr = string.split("")
  let open = 0
  let closed = 0
  for(let c of arr){
    if(c === "("){
      open += 1
    } else {
      closed += 1
    }
  }
  if(arr[0] === ")" && arr.slice(-1)[0] === "("){
    return (Math.abs(open - closed)) + 2
  } else {
  return Math.abs(open - closed)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("Expecting: 5");
  console.log(balancingParentheses('((((((())'));

  console.log("Expecting: 2");
  console.log(balancingParentheses(')('));
}

module.exports = balancingParentheses;


// Build a function that accepts a string of parenthesis as an argument. The function will return the amount of parenthesis needed to make the string "balanced"
// ()) => (())


// Please add your pseudocode to this file
// 
// 1. initialize two variables: open and closed
// 2. Loop through the string to find the amount of closing parenthesis and closing parenthesis and store them in open and closed
// 3. Return the difference

// And a written explanation of your solution


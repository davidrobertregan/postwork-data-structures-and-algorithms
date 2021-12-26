function consecutiveSubstrings(string) {
  let arr = []
  
  for(let i = 0; i < string.length; i++){
    let char = string[i]
    arr.push(char)
    for(let a = i + 1; a < string.length; a++){
      char = char + string[a]
      arr.push(char)
    }
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


// write a method that takes a string as an argument and returns an array with its consecutive substrings... ie "doggy" ==> [d, do, dog, dogg, doggy, o, og, oggy, etc.]
// Please add your pseudocode to this file
// initialize substring array
//  loop through the string. starting with the first character, add the next character one at a time. repeat the process after finished with character one. 

// loop through string;
// let char = string[0]
// arr.push(char)
// loop through string
// char = char + string[i]
// arr.push(char)

// And a written explanation of your solution
// to solve this one, we loop through the string twice - one within the loop. for the first iteration, we grab a string character and assign it to a variable that we put inside our arr. in that same iteration, we initiate another loop. for this loop we then reassign the character variable to be its current value plus the next character. this process repeats itself until we reach the ned of the string.

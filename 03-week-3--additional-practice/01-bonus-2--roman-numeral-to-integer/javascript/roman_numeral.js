function romanNumeral(string) {
  let array = []
  let num = 0

  for (i = 0; i < string.length; i++){
    if(string[i] === "I") {
      array.push(1)
    } else if (string[i] === "V"){
      array.push(5)
    } else if (string[i] === "X"){
      array.push(10)
    } else if (string[i] === "L"){
      array.push(50)
    } else if (string[i] === "C"){
      array.push(100)
    } else if (string[i] === "D"){
      array.push(500)
    } else if (string[i] === "M"){
      array.push(1000)
    }
  }

  for(i = 0; i < array.length; i++){
    if(array[i] < array[i + 1]){
      num = num - array[i]
    } else {
      num = num + array[i]
    }
  }
  return num
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;


// write a method that takes a string of roman numerals and return the integer value


// Please add your pseudocode to this file
// - init variable num with starting value of zero
// - create new array with each character converted to number
// - loop through each character of the string. if the preceding character is less than the current, subtract from num. If larger, add to num
// - return num

// And a written explanation of your solution

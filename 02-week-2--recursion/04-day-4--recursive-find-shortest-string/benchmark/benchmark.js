// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.

function findShortestString(arr) {
  return arr.reduce((shortest, string) =>
    string.length < shortest.length ? string : shortest
  );
}

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


function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}

benchmark(() => findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']))


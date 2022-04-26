function findShortestStringRecursive(arr) {
  // iterative solution
  // return arr.reduce((shortest, current) => 
  //   current.length < shortest.length ? current : shortest
  // )

  // recursive solution
  if (arr.length < 2) {
    return arr
  }

  const result = findShortestStringRecursive(arr.slice(1))
  // removes for element for comparison to remaining element(s)

  return arr[0].length <= result.length ? arr[0] : result

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

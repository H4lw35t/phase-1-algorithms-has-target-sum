function hasTargetSum(array, target) {
  const numSet = {};

  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];

    if (numSet[difference]) {
      return true;
    }

    numSet[array[i]] = true;
  }

  return false;
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));
console.log(hasTargetSum([1, 2, 5], 4));

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  let oddArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    oddArr.push(arr[i]);
  }
  return oddArr;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  let reversedArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    reversedArr.push(arr[i]);
  }
  return reversedArr.reverse();
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  let secondPowerArr = [];
  for (let i = 1; i < arr.length; i *= 2) {
    secondPowerArr.push(arr[i]);
  }

  return secondPowerArr;
}

function nthPower(arr, n) {
  let nthPowerArr = [];
  for (let i = 1; i < arr.length; i *= n) {
    nthPowerArr.push(arr[i]);
  }
  return nthPowerArr;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  let midIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return arr.slice(0, midIndex);
  } else {
    return arr.slice(0, midIndex + 1);
  }
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  let midIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return arr.slice(midIndex);
  } else {
    return arr.slice(0, midIndex - 1);
  }
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};

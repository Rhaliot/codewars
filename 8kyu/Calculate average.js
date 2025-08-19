// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// My solution:

function findAverage(array) {
  if (array.length) {
    let average = array.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return average / array.length;
  }
  return 0;
}

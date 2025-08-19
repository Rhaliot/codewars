// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My solution:

function fakeBin(x) {
  let string = x.split("");

  let array = string.map((e) => {
    if (e >= 5) {
      return 1;
    }
    return 0;
  });

  return array.join("");
}

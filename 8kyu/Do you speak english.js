// <!-- Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct. -->

// My solution:

function spEng(sentence) {
  if (sentence.toLowerCase().includes(`english`)) {
    return true;
  }
  return false;
}

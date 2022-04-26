// Create a function that accepts a string  as a parameter then returns the LONGEST palindrome in that string.  A Palindrome is  a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or nurses run. Punctuation marks can be ignored.

//since js file is not supported in gdrive. Here's the jsfiddle link: https://jsfiddle.net/pLghrwz6/

const isPalindrome = (word) => {
  let formatWord = word.match(/\b(\w+)\b/g);
  formatWord = formatWord.join("").toLowerCase();

  const reverse = formatWord.split("").reverse().join("").toLowerCase();

  return formatWord === reverse;
};

const getLongestPalindrome = (sentence) => {
  let formatSentence = sentence.match(/\b(\w+)\b/g);
  console.log({ formatSentence });
  let sentenceLength = formatSentence.length;

  let palindromes = [];
  let palindromeLengths = [];

  //check whole sentence
  if (isPalindrome(sentence)) {
    return sentence;
  }

  //check per word
  for (let i = 0; i < sentenceLength; i++) {
    //check every word
    if (isPalindrome(formatSentence[i])) {
      if (formatSentence[i].length > 1) {
        palindromes.push({
          word: formatSentence[i],
          indexFrom: i,
          indexTo: null,
        });
      }
    }

    //check every word but with greater scope
    for (let j = 0; j < sentenceLength; j++) {
      if (j > i) {
        let scopedSentence = [];
        for (let k = i; k <= j; k++) {
          scopedSentence.push(formatSentence[k]);
        }
        let newScopedSentence = scopedSentence.join(" ");
        if (isPalindrome(newScopedSentence)) {
          palindromes.push({
            word: newScopedSentence,
            indexFrom: i,
            indexTo: j,
          });
        }
      }
    }
  }

  for (let i = 0; i < palindromes.length; i++) {
    palindromeLengths.push(palindromes[i].word.length);
  }

  //get highest number
  const max = Math.max(...palindromeLengths);
  const index = palindromeLengths.indexOf(max);

  //return longest word
  return palindromes[index].word;
};

console.log({
  LongestPalindrome: getLongestPalindrome(
    "Hello will you please rise to vote, sir George"
  ),
});

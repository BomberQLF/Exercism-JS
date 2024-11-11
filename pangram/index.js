let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newAlphabet = alphabet.split('');
export const isPangram = (sentence) => {
    let newSentence = sentence.toLowerCase().split('');
    let isPangram = newAlphabet.every(letter => newSentence.includes(letter));
    console.log(isPangram ? "This is a pangram" : "This isn't a pangram");
  return isPangram;
};
isPangram("The quick brown fox jumps over the lazy dog.");
isPangram("Hello");
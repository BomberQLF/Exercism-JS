export const isPangram = (sentence) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let loweredSentence = sentence.toLowerCase().split('');
    // Les "..." permettent de transformer alphabet en une chaine de caractère donc même pas besoin de split au dessus pour que ca fonctionne.
    return [...alphabet].every(letter => loweredSentence.includes(letter));
  };
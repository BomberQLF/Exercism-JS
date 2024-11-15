export const findAnagrams = (word, words) => {
    // Helper function to normalize a word by sorting its letters
    const normalize = str => str.toLowerCase().split('').sort().join('');
    // Normalize the target word for comparison
    const normalizedWord = normalize(word);
    return words.filter(candidate => {
      // Ignore if the candidate is the same word as the target (case-insensitive)
      if (candidate.toLowerCase() === word.toLowerCase()) {
        return false;
      }
      // Check if the normalized candidate matches the normalized target word
      return normalize(candidate) === normalizedWord;
    });
  };
  
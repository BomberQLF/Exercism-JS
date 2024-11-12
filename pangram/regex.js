export const isPangram = (sentence) => 
  new Set(sentence.toLowerCase().match(/[a-z]/g)).size === 26;

//   Phrase mis en minuscule
// .match() sert à renvoyer les valeurs qui match le REGEX
// /[a-z]/g veut dire toutes les lettres de a à z
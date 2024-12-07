export function getFirstCard(deck) {
    const [firstCard, ...rest] = deck
    return firstCard;
  }
  

  export function getSecondCard(deck) {
    const [first, second, ...rest] = deck;
    return second;
  }

  export function swapTopTwoCards(deck) {
    let [first, second, ...rest] = deck;
    return [second, first, ...rest];
  }
  
  export function discardTopCard(deck) {
    const [first, ...rest] = deck;
    return [first, rest];
  }
  
  const FACE_CARDS = ['jack', 'queen', 'king'];
  
  export function insertFaceCards(deck) {
    const [first, ...rest] = deck;
    return [first, ...FACE_CARDS, ...rest];
  }
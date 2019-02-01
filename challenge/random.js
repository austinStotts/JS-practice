
var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

const orderedArray = (n) => {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i)
  }
  return array;
}

const shuffleDeck = (deck) => {
  for(let j = 0; j < 2; j ++) {
    for (let i = deck.length - 1; i >= 0; i--) {
      let index = Math.floor(Math.random() * deck.length);
      [deck[i], deck[index]] = [deck[index], deck[i]];
    }
  }
  return deck;
}

let test = [1,2,3,4,5,6,7,8,9];
console.time()
console.log(shuffleDeck(orderedDeck()).length)
console.timeEnd()



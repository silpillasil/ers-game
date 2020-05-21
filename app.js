// MAKING CARDS

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.pngName = (suit + rank).toString();
        console.log("i am printing" + this.pngName);
        console.log("suit " + suit);
        console.log("rank " + rank);
         // TODO
    }
    createPNGname() {

    }
    toString() {
        console.log("i am printing" + this.pngName);
        return this.pngName;
    }
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        checkSlappable();
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}

function checkSlappable() {
    console.log("hi");
}

//////////



var ALL_CARDS, P0_CARDS, P1_CARDS;
ALL_CARDS = []; P0_CARDS = []; P1_CARDS = []

function init() {
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    for (var a = 0; a < suits.length; a++) {
      for (var b = 0; b < ranks.length; b++) {
        ALL_CARDS.push(new Card(suits[a], ranks[b]));
        console.log("h");
      }
    }
    //ALL_CARDS.push(new Card("hello", 2, 2));
    console.log(ALL_CARDS.length);
    for (i = 0; i < ALL_CARDS.length; i++) {
        // console.log(i);
        console.log(ALL_CARDS[i].toString());
    }

}

var a = new Card("Hearts", "2");
console.log(a.toString());
init();

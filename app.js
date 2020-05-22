// SETUP

var ALL_CARDS, P0_CARDS, P1_CARDS;
var TVAL_D;
var bottom_card, top_card, recent_cards;

TVAL_D = {
    'Ace': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'Jack': null,
    'Queen': null,
    'King': null
};

recent_cards = [];
top_card, bottom_card = null, null;

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.pngName = (suit + '_' + rank).toString();
    }

    toString() {
        return this.pngName;
    }

    toImgString() {
        return "PNG/" + this.pngName + ".png";
    }

    /** returns whether two cards qualify for an add10 SLAP. */
    static add10(upper, under) {
        if (TVAL_D[upper.rank] == null || TVAL_D[lower.rank] == null) {
            return false;
        }
        if (TVAL_D[upper.rank] + TVAL_D[lower.rank] == 10) {
            return true;
        }
        return false;
    }

    /** returns whether two cards qualify for a top-bottom SLAP. */
    static tpbm() {
        return top_card.rank == bottom_card.rank;
    }

    /** returns whether two cards qualify for a marriage or divorce. */
    static love(upper, under) {
        var pair = [upper.rank, under.rank];
        pair.sort();
        var goal = ['King', 'Queen'];
        return JSON.stringify(pair)==JSON.stringify(goal);
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

ALL_CARDS = []; P0_CARDS = []; P1_CARDS = [];

/** initializes game by creating one card of each suit/rank and putting them into ALL_CARDS. */
function init() {
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    for (var a = 0; a < suits.length; a++) {
      for (var b = 0; b < ranks.length; b++) {
        ALL_CARDS.push(new Card(suits[a], ranks[b]));
        console.log("h");
      }
    }
    console.log(ALL_CARDS.length);
    for (i = 0; i < ALL_CARDS.length; i++) {
        // console.log(i);
        console.log(ALL_CARDS[i].toString());
    }

}

// ADD ALL EVENT LISTENERS HERE.
document.addEventListener('DOMContentLoaded', function () { // why do you need this.

    /** dealing cards */
    document.querySelector('#deal').addEventListener('click', function() {
        // DEAL function
        var d = 1;
        for (var c = 0; c < ALL_CARDS.length; c++) {
            if (d == 1) {
                P1_CARDS.push(ALL_CARDS[c]);
            } else {
                P0_CARDS.push(ALL_CARDS[c]);
            }
            d = 1-d;
        }

        console.log([P0_CARDS.length, P1_CARDS.length]);
        console.log(ALL_CARDS.length);


    });


});


init();

// SETUP

$(".inactive-player").height($(".card-panel").height());

var ALL_CARDS, P0_CARDS, P1_CARDS;
var TVAL_D;
var bottom_card, top_card, recent_cards, queue_card;
var gamePlaying;

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
top_card, bottom_card, queue_card = null, null, null;
// queue_card is the card that is about to be put down on the top of stack.
gamePlaying = false;

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.pngName = (rank + '_' + suit).toString();
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



function checkSlappable() {
    console.log("hi");
}

/** credits to https://stackoverflow.com/questions/
2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log("shuffle func " + randomIndex);
  return array;
}

function printCardArr(array) {
    var stri = "";
    for (var i = 0; i < array.length; i++) {
        stri += array[i].toString();
        stri += " ";
        if (i % 5 == 4) {
            stri += "\n";
        }
    }
    return stri;
}

function playCard(playerList) {
    queue_card = playerList.pop();
    console.log(queue_card.toString());
    last_top = top_card;
    top_card = queue_card;
    var image = document.querySelector('.currcard');
    image.src = top_card.toImgString();
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
        //console.log(ALL_CARDS[i].toString());
    }

}

// ADD ALL EVENT LISTENERS HERE.
document.addEventListener('DOMContentLoaded', function () { // why do you need this.

    /** dealing cards */
    document.querySelector('#deal').addEventListener('click', function() {
        // DEAL function
        var d = 1;
        var ALL_SHUFFLE = shuffle(ALL_CARDS);
        for (var c = 0; c < ALL_SHUFFLE.length; c++) {
            if (d == 1) {
                P1_CARDS.push(ALL_SHUFFLE[c]);
            } else {
                P0_CARDS.push(ALL_SHUFFLE[c]);
            }
            d = 1-d;
        }

        P0_CARDS = shuffle(P0_CARDS);
        P1_CARDS = shuffle(P1_CARDS);

        console.log("HERE");
        console.log([printCardArr(P0_CARDS), printCardArr(P1_CARDS)]);
        console.log(ALL_CARDS.length);

    });

    document.querySelector('#begin').addEventListener('click', function() {
        if (!gamePlaying) {
            gamePlaying = true;
            document.querySelector('#begin').textContent = "quit game";
        } else {
            // TODO: code for confirming restart
            gamePlaying = false;
            document.querySelector('#begin').textContent = "start game";
        }
    });




});

init();

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        checkSlappable();
    }
    else if (e.keyCode == '40') {
        // down arrow
        playCard(P0_CARDS);
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}

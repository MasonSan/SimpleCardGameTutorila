var EasyItSolution4U;
(function (EasyItSolution4U) {
    var PlayinCardDeck = /** @class */ (function () {
        function PlayinCardDeck() {
            this.Cards = null;
            this.Cards = new Array();
            this.addCard(new EasyItSolution4U.PlayingCard("Ace", "1", EasyItSolution4U.CardSuit.Clubs, "Cards/ace_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Two", "2", EasyItSolution4U.CardSuit.Clubs, "Cards/two_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Three", "3", EasyItSolution4U.CardSuit.Clubs, "Cards/three_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Four", "4", EasyItSolution4U.CardSuit.Clubs, "Cards/four_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Five", "5", EasyItSolution4U.CardSuit.Clubs, "Cards/five_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Six", "6", EasyItSolution4U.CardSuit.Clubs, "Cards/six_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Seven", "7", EasyItSolution4U.CardSuit.Clubs, "Cards/seven_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Eight", "8", EasyItSolution4U.CardSuit.Clubs, "Cards/eight_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Nine", "9", EasyItSolution4U.CardSuit.Clubs, "Cards/nine_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Ten", "10", EasyItSolution4U.CardSuit.Clubs, "Cards/ten_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Jack", "11", EasyItSolution4U.CardSuit.Clubs, "Cards/jack_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Queen", "12", EasyItSolution4U.CardSuit.Clubs, "Cards/queen_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("King", "13", EasyItSolution4U.CardSuit.Clubs, "Cards/king_of_clubs.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Ace", "1", EasyItSolution4U.CardSuit.Spades, "Cards/ace_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Two", "2", EasyItSolution4U.CardSuit.Spades, "Cards/two_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Three", "3", EasyItSolution4U.CardSuit.Spades, "Cards/three_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Four", "4", EasyItSolution4U.CardSuit.Spades, "Cards/four_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Five", "5", EasyItSolution4U.CardSuit.Spades, "Cards/five_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Six", "6", EasyItSolution4U.CardSuit.Spades, "Cards/six_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Seven", "7", EasyItSolution4U.CardSuit.Spades, "Cards/seven_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Eight", "8", EasyItSolution4U.CardSuit.Spades, "Cards/eight_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Nine", "9", EasyItSolution4U.CardSuit.Spades, "Cards/nine_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Ten", "10", EasyItSolution4U.CardSuit.Spades, "Cards/ten_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Jack", "11", EasyItSolution4U.CardSuit.Spades, "Cards/jack_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Queen", "12", EasyItSolution4U.CardSuit.Spades, "Cards/queen_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("King", "13", EasyItSolution4U.CardSuit.Spades, "Cards/king_of_spades.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Ace", "1", EasyItSolution4U.CardSuit.Heart, "Cards/ace_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Two", "2", EasyItSolution4U.CardSuit.Heart, "Cards/two_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Three", "3", EasyItSolution4U.CardSuit.Heart, "Cards/three_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Four", "4", EasyItSolution4U.CardSuit.Heart, "Cards/four_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Five", "5", EasyItSolution4U.CardSuit.Heart, "Cards/five_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Six", "6", EasyItSolution4U.CardSuit.Heart, "Cards/six_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Seven", "7", EasyItSolution4U.CardSuit.Heart, "Cards/seven_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Eight", "8", EasyItSolution4U.CardSuit.Heart, "Cards/eight_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Nine", "9", EasyItSolution4U.CardSuit.Heart, "Cards/nine_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Ten", "10", EasyItSolution4U.CardSuit.Heart, "Cards/ten_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Jack", "11", EasyItSolution4U.CardSuit.Heart, "Cards/jack_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Queen", "12", EasyItSolution4U.CardSuit.Heart, "Cards/queen_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("King", "13", EasyItSolution4U.CardSuit.Heart, "Cards/king_of_heart.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Ace", "1", EasyItSolution4U.CardSuit.Diamond, "Cards/ace_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Two", "2", EasyItSolution4U.CardSuit.Diamond, "Cards/two_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Three", "3", EasyItSolution4U.CardSuit.Diamond, "Cards/three_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Four", "4", EasyItSolution4U.CardSuit.Diamond, "Cards/four_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Five", "5", EasyItSolution4U.CardSuit.Diamond, "Cards/five_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Six", "6", EasyItSolution4U.CardSuit.Diamond, "Cards/six_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Seven", "7", EasyItSolution4U.CardSuit.Diamond, "Cards/seven_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Eight", "8", EasyItSolution4U.CardSuit.Diamond, "Cards/eight_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Nine", "9", EasyItSolution4U.CardSuit.Diamond, "Cards/nine_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Ten", "10", EasyItSolution4U.CardSuit.Diamond, "Cards/ten_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Jack", "11", EasyItSolution4U.CardSuit.Diamond, "Cards/jack_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("Queen", "12", EasyItSolution4U.CardSuit.Diamond, "Cards/queen_of_diamond.png"));
            this.addCard(new EasyItSolution4U.PlayingCard("King", "13", EasyItSolution4U.CardSuit.Diamond, "Cards/king_of_diamond.png"));
        }
        PlayinCardDeck.prototype.addCard = function (card) {
            this.Cards.push(card);
        };
        return PlayinCardDeck;
    }());
})(EasyItSolution4U || (EasyItSolution4U = {}));
//# sourceMappingURL=PlayinfCardDeck.js.map
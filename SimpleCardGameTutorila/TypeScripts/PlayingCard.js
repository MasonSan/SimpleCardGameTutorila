var EasyItSolution4U;
(function (EasyItSolution4U) {
    var PlayingCard = /** @class */ (function () {
        function PlayingCard(cardName, cardValue, cardSuit, imageLocation, soundLocation) {
            this.Suit = cardSuit;
            this.CardName = cardName;
            this.CardValue = cardValue;
            this.CardImageLocation = imageLocation;
            this.CardSoundLocation = soundLocation;
        }
        return PlayingCard;
    }());
    EasyItSolution4U.PlayingCard = PlayingCard;
})(EasyItSolution4U || (EasyItSolution4U = {}));
var myCurrentCard = new EasyItSolution4U.PlayingCard("ACE", "14", EasyItSolution4U.CardSuit.Diamond, "", "");
//# sourceMappingURL=PlayingCard.js.map
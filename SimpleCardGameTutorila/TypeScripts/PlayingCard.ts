
module EasyItSolution4U {

    export class PlayingCard {

        CardName: string;
        CardValue: string;
        CardImageLocation: string;
        CardSoundLocation: string;
        Suit: CardSuit;

        constructor(cardName: string, cardValue: string, cardSuit: CardSuit, imageLocation: string, soundLocation?: string) {

            this.Suit = cardSuit;
            this.CardName = cardName;
            this.CardValue = cardValue;
            this.CardImageLocation = imageLocation;
            this.CardSoundLocation = soundLocation;
        }

    }
}


var myCurrentCard = new EasyItSolution4U.PlayingCard("ACE", "14", EasyItSolution4U.CardSuit.Diamond, "", "");
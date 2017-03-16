export class Hand {
    pokerHand(dealtHand) {
        function sortCardsLowToHigh (a, b) {
            return a[0] - b[0];
        }
        let sortedHand = dealtHand.split(", ").sort(sortCardsLowToHigh);

        return sortedHand;
    }
}

export class Card {
    private cardValue: any = {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14};

    getValue(card:string) {
        let cardValue: any = card.split("");
        return this.cardValue[cardValue[0]];
    }
}

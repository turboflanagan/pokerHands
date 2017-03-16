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
    private cardName: any = {14: "A", 13: "K", 12: "Q", 11: "J", 10: "10", 9: "9", 8: "8", 7: "7", 6: "6", 5: "5", 4: "4", 3: "3", 2: "2"};

    getValue(card:string) {
        let cardValue: any = card.split("");
        return this.cardValue[cardValue[0]];
    }
}

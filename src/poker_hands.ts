export class PokerHands {
    pokerHand(dealtHand) {
        function sortCardsLowToHigh (a, b) {
            return a[0] - b[0];
        }
        let sortedHand = dealtHand.split(", ").sort(sortCardsLowToHigh);
        console.log(sortedHand);

        return sortedHand;

    }
}

//

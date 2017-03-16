"use strict";
var Hand = (function () {
    function Hand() {
    }
    Hand.prototype.pokerHand = function (dealtHand) {
        function sortCardsLowToHigh(a, b) {
            return a[0] - b[0];
        }
        var sortedHand = dealtHand.split(", ").sort(sortCardsLowToHigh);
        return sortedHand;
    };
    return Hand;
}());
exports.Hand = Hand;
var Card = (function () {
    function Card() {
        this.cardValue = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14 };
        this.cardName = { 14: "A", 13: "K", 12: "Q", 11: "J", 10: "10", 9: "9", 8: "8", 7: "7", 6: "6", 5: "5", 4: "4", 3: "3", 2: "2" };
    }
    Card.prototype.getValue = function (card) {
        var cardValue = card.split("");
        return this.cardValue[cardValue[0]];
    };
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=poker_hands.js.map
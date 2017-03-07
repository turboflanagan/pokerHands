"use strict";
var PokerHands = (function () {
    function PokerHands() {
    }
    PokerHands.prototype.pokerHand = function (dealtHand) {
        function sortCardsLowToHigh(a, b) {
            return a[0] - b[0];
        }
        var sortedHand = dealtHand.split(", ").sort(sortCardsLowToHigh);
        console.log(sortedHand);
        return sortedHand;
    };
    return PokerHands;
}());
exports.PokerHands = PokerHands;
//
//# sourceMappingURL=poker_hands.js.map
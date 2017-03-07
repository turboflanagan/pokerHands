"use strict";
var poker_hands_1 = require("../src/poker_hands");
describe("pokerHand", function () {
    it('should make a hand', function () {
        var pokerHands = new poker_hands_1.PokerHands();
        expect(pokerHands.pokerHand('2H, 5H, 6H, 3H, 8H')).toEqual(['2H', '3H', '5H', '6H', '8H']);
    });
    it('should sort a hand low to high', function () {
        var pokerHands = new poker_hands_1.PokerHands();
        expect(pokerHands.pokerHand('2H, 5H, 6H, 3H, 8H')).toEqual(['2H', '3H', '5H', '6H', '8H']);
    });
});
//# sourceMappingURL=poker_hands.spec.js.map
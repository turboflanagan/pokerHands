"use strict";
var poker_hands_1 = require("../src/poker_hands");
describe("pokerHand", function () {
    it('should make a hand', function () {
        var pokerHands = new poker_hands_1.Hand();
        expect(pokerHands.pokerHand('2H, 5H, 6H, 3H, 8H')).toEqual(['2H', '3H', '5H', '6H', '8H']);
    });
    it('should sort a hand low to high', function () {
        var pokerHands = new poker_hands_1.Hand();
        expect(pokerHands.pokerHand('2H, 5H, 6H, 3H, 8H')).toEqual(['2H', '3H', '5H', '6H', '8H']);
    });
    it('should give values to the king', function () {
        var card = new poker_hands_1.Card();
        expect(card.getValue('KH')).toEqual(13);
    });
    it('should give values to the 10 card', function () {
        var card = new poker_hands_1.Card();
        expect(card.getValue('TH')).toEqual(10);
    });
    it('should give values to the 5 card', function () {
        var card = new poker_hands_1.Card();
        expect(card.getValue('5H')).toEqual(5);
    });
});
//# sourceMappingURL=poker_hands.spec.js.map
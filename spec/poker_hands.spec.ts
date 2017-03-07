import {PokerHands} from "../src/poker_hands"
describe("pokerHand", ()=> {
    it('should make a hand', ()=> {
        let pokerHands: PokerHands = new PokerHands();
        expect(pokerHands.pokerHand('2H, 5H, 6H, 3H, 8H')).toEqual(['2H', '3H', '5H', '6H', '8H']);
    });
    it('should sort a hand low to high', ()=> {
        let pokerHands: PokerHands = new PokerHands();
        expect(pokerHands.pokerHand('2H, 5H, 6H, 3H, 8H')).toEqual(['2H', '3H', '5H', '6H', '8H']);
    });
});

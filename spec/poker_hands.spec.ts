import {Hand, Card} from "../src/poker_hands"
describe("pokerHand", ()=> {
    it('should make a hand', ()=> {
        let pokerHands: Hand = new Hand();
        expect(pokerHands.pokerHand('2H, 5H, 6H, 3H, 8H')).toEqual(['2H', '3H', '5H', '6H', '8H']);
    });
    it('should sort a hand low to high', ()=> {
        let pokerHands: Hand = new Hand();
        expect(pokerHands.pokerHand('2H, 5H, 6H, 3H, 8H')).toEqual(['2H', '3H', '5H', '6H', '8H']);
    });
    it('should sort a hand low to high with face cards', ()=> {
        let pokerHands: Hand = new Hand();
        expect(pokerHands.pokerHand('2H, 5H, 6H, KH, QH')).toEqual(['2H', '5H', '6H', 'QH', 'KH']);
    });
    it('should give values to the king', ()=> {
        let card: Card = new Card();
        expect(card.getValue('KH')).toEqual(13);
    });
    it('should give values to the 10 card', ()=> {
        let card: Card = new Card();
        expect(card.getValue('TH')).toEqual(10);
    });
    it('should give values to the 5 card', ()=> {
        let card: Card = new Card();
        expect(card.getValue('5H')).toEqual(5);
    });


});

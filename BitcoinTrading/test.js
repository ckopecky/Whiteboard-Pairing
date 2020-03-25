const bitCoinTrading = require('./index');

const arr1 = [1050, 270, 1540, 3800, 2];

describe('bitCoinTrading', () => {
    it('is a function', () => {
        expect(typeof bitCoinTrading).toBe('function');
    });
    it('returns a number', () => {
        expect(typeof bitCoinTrading(arr1)).toBe('number');
    });
    it('price goes down then up then goes down', () => {
        expect(bitCoinTrading(arr1)).toBe(3530);
    });
    it('price goes up then goes down', () => {
        expect(bitCoinTrading([1, 5, 3, 2])).toBe(4);
    });
    it('price goes up all day', () => {
        expect(bitCoinTrading([1, 6, 7, 9])).toBe(8);
    });
    it('price goes down all day', () => {
        expect(bitCoinTrading([9, 7, 4, 1])).toBe(-2);
    });
    it('price stays the same all day', () => {
        expect(bitCoinTrading([6, 6, 6, 6])).toBe(0);
    });
    it('empty prices errors out', () => {
        expect(bitCoinTrading([])).toBe("Must have at least two prices to find max profit");
    });
    it('one price errors out', () => {
        expect(bitCoinTrading([4])).toBe("Must have at least two prices to find max profit");
    });
});
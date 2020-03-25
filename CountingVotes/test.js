const counting = require('./index');



const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];



describe('counting votes', () => {
    it('should return michael', () => {
        expect(counting(votes)).toBe('michael');
    });
});
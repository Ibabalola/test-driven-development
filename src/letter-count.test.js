import { expect } from 'chai';
import { getLetterCount } from './letter-count';

// mocha functions
describe('getLetterCount - basic functionality', () => {
    it('should return an object when passed an empty string', () => {
        const expected = {};
        const actual = getLetterCount('');

        // assertions
        expect(actual).to.deep.equal(expected);
    });

    it('should return the correct letter count for a word with only one of each letter', () => {
        const expected = { c: 1, a: 1, t: 1 };
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected);
    });

    it('should return the correct letter count for a word with two of any letter', () => {
        const expected = { b: 1, e: 2, t: 2, r: 1 };
        const actual = getLetterCount('better');
        expect(actual).to.deep.equal(expected);
    });

    it('should return the correct letter count for a word with more than two of any letter', () => {
        const expected = { m: 1, i: 4, s: 4, p: 2 };
        const actual = getLetterCount('mississippi');
        expect(actual).to.deep.equal(expected);
    });

    it('should return the correct letter count for a number of words and ignore spaces', () => {
        const expected = { v: 1, o: 2, i: 1, c: 1, e: 1, s: 1, r: 1, a: 1, n: 2, t: 1 };
        const actual = getLetterCount('voices rant on');
        expect(actual).to.deep.equal(expected);
    });
});
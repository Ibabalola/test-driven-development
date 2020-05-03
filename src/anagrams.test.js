import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - test whether 2 strings are anagrams', () => {
    it('should return false when one string is passed', () => {
        const expected = false;
        const actual = isAnagram('string');

        expect(actual).to.equal(expected);
    });

    it('should return false when 2 empty strings are passed', () => {
        const expected = false;
        const actual = isAnagram('','');

        expect(actual).to.equal(expected);
    });

    it('should return false if any of the strings passed contain any characters other than A-Z, A-z or a space', () => {
        const expected = false;
        const actual = isAnagram('@£$%','@£$%');

        expect(actual).to.equal(expected);
    });

    it('should return false when 2 strings contain the same exact letters of different quantities', () => {
        const expected = false;
        const actual = isAnagram('listens','silent');

        expect(actual).to.equal(expected);
    });

    it('should return false when 2 strings contain different list of letters of different quantities', () => {
        const expected = false;
        const actual = isAnagram('elbows','below');

        expect(actual).to.equal(expected);

        const actual2 = isAnagram('below','elbows');
        expect(actual2).to.equal(expected);
    });

    it('should return true when 2 strings contain the same exact letters of the same quantities', () => {
        const expected = true;
        const actual = isAnagram('listen','silent');

        expect(actual).to.equal(expected);
    });

    it('should return true when 2 strings contain the same exact letters of the same quantities when one string contains more than one letter', () => {
        const expected = true;
        const actual = isAnagram('conversation','voices rant on');

        expect(actual).to.equal(expected);
    });

    it('should return true when 2 strings contain the same exact letters of different cases', () => {
        const expected = true;
        const actual = isAnagram('STATES','tastes');

        expect(actual).to.equal(expected);
    });
});
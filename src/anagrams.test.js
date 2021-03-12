import { expect } from 'chai';
import { isAnagram, hasSpecialChar, isEmptyCheck } from './anagrams';

describe('isAnagram - test whether 2 strings are anagrams', () => {
    it('should return false when nothing is passed in', () => {
        const actual = isAnagram();
        expect(actual).to.be.false;
    });

    it('should return false when one string is passed', () => {
        const actual = isAnagram('string');
        expect(actual).to.be.false;
    });

    it('should return false when 2 empty strings are passed', () => {
        const actual = isAnagram('','');
        expect(actual).to.be.false;
    });

    it('should return false if any of the strings passed contain any characters other than A-Z, A-z or a space', () => {
        const actual = isAnagram('@£@','@£@£');
        expect(actual).to.be.false;
    });

    it('should return false when 2 strings contain the same exact letters of different quantities', () => {
        const actual = isAnagram('listens','silent');
        expect(actual).to.be.false;
    });

    it('should return false when 2 strings contain different list of letters of different quantities', () => {
        const actual = isAnagram('elbows','below');
        expect(actual).to.be.false;
    });

    it('should return true when 2 strings contain the same exact letters of the same quantities', () => {
        const actual = isAnagram('elbow','below');
        expect(actual).to.be.true;
    });

    it('should return true when 2 strings contain the same exact letters of the same quantities when one string contains more than one word', () => {
        const actual = isAnagram('conversation','voices rant on');
        expect(actual).to.be.true;
    });

    it('should return true when 2 strings contain the same exact letters of different cases', () => {
        const actual = isAnagram('STATES','tastes');
        expect(actual).to.be.true;
    });
});

describe('has special characters', () => {
    it('should return true is words contains special characters', () => {
        const actual = hasSpecialChar('@£@£');

        expect(actual).to.be.true;
    });

    it('should return false is words contains special characters', () => {
        const actual = hasSpecialChar('world');

        expect(actual).to.be.false;
    });
});

describe('isEmptyCheck', () => {
    it('should return true if both words are empty', () => {
        const actual = isEmptyCheck('');
        expect(actual).to.be.true;
    });

    it('should return true if one words is empty', () => {
        const actual = isEmptyCheck('world');
        expect(actual).to.be.true;
    });

    it('should return false if both words are not empty', () => {
        const actual = isEmptyCheck('world', 'earth');
        expect(actual).to.be.false;
    });
});
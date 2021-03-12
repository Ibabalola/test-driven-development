// accepts 2 string and tells whether the two strings are anagrams of eachother.

// An anagram are two strings have the same exact letters in them in the same quantities
// but in different orders

// e.g. listen - silent // elbow - below
// e.g. conversation - voices rant on

// elbows - below is NOT an anagram
// listens - silent is NOT an anagram

// should accept only spaces and characters
// should ignore cases, case insensitive

import _ from 'lodash';
import { getLetterCount } from './letter-count';

export const isAnagram = (firstString, secondString) => {

    if (isEmptyCheck(firstString, secondString)) {
        return false;
    }

    const toLowerCaseFirstString = firstString.toLowerCase();
    const toLowerCaseSecondString = secondString.toLowerCase();

    if (hasSpecialChar(toLowerCaseFirstString) || hasSpecialChar(toLowerCaseSecondString)) {
        return false;
    }

    return _.isEqual(getLetterCount(toLowerCaseFirstString), getLetterCount(toLowerCaseSecondString));
}

export const hasSpecialChar = (word) => {
    const reEx = /[^\w\s]/g;
    return word[word.search(reEx)] !== undefined;
}

export const isEmptyCheck = (firstString, secondString) => !firstString || !secondString;


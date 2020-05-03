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
    if (!firstString || !secondString)
        return false;

    const firstWord = firstString.trim();
    const secondWord = secondString.trim();

    if (hasSpecialChar(firstWord) || hasSpecialChar(secondWord)) {
        return false;
    }

    return _.isEqual(getLetterCount(firstWord.toLowerCase()), getLetterCount(secondWord.toLowerCase()));
}

const hasSpecialChar = (string) => {
    // any character that is not a word character or whitespace
    const regex = /[^\w\s]/g;

    return string[string.search(regex)] !== undefined;
}



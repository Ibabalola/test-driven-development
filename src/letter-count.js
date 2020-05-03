// 'cat' -> { c: 1, a: 1, t: 1 }
// 'better' -> { b: 1, e: 2, t: 2, r: 1}

export const getLetterCount = string => {
    const letters = string.split('');
    let result = {};

    letters.forEach(char => result[char] = letters.filter(filterChar => filterChar === char).length);

    delete result[' '];

    return result;
};
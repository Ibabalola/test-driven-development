import { expect } from 'chai';
import { add, multiply, isGreaterThan, factorial } from './quiz';

describe('quiz', () => {
    it('should return the correction answer - question one', () => {
        // What is the output of

        const a = 0.1;
        const b = 0.2;
        const c = 0.3;

        const result = add(a, b);
        expect(result).to.equal(c);

        // this is because of floating point precision issue in Javascript
		// 0.1 + 0.2 = 0.30000000000000004
        // c is 0.30000000000000004
    });

    it('should return the correction answer - question two', () => {
        // What is the output of

        const a = 10000000000000000
        const b = 1.1;
        const c = 0; // what is the value of c and why?

        const result = add(a, b);
        expect(result).equal(c);

        // Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
        // c is 10000000000000002
    });

    it('should return the correction answer - question three', () => {
        // What is the output of

        const a = 10000000000000000
        const b = 1;
        const c = 0; // what is the value of c and why?

        const result = add(a, b);
        expect(result).equal(c);

        // Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
        // c is 10000000000000000
    });

    it('should return the correction answer - question four', () => {
        // What is the output of

        const a = [1, 2, 3];
        const b = [4, 5, 6];
        const c = []; // what is the value of c and why?

        const result = add(a, b);
        expect(result).equal(c);

        // Array will be converted to string first and then concatenation happens and then back to array
        // c is [1, 2, 34, 5, 6]
    });

    it('should return the correction answer - question five', () => {
        // What is the output of

        const a = true;
        const b = true;
        const c = true; // what is the value of c and why?

        const result = add(a, b);
        expect(result).equal(c);

        // This is because JavaScript takes the value of true as 1 and false as 0
        // 2
    });

    it('should return the correction answer - question six', () => {
        // What is the output of

        const a = ('5'- 2); // covert to integer = 3 
        const b = ('5'+ 2); // covert to string =  52
        const c = 0; // what is the value of c and why?

        const result = add(a, b);
        expect(result).equal(c);

        // When we substract char, result will be converted to a number
        // When we add char will be converted to string 
        // result will be converted to string
        // c is 352
    });

    it('should return the correction answer - question seven', () => {
        // What is the output of

        const a = ('5'- 2);
        const b = ('5'+ 2);
        const c = 0; // what is the value of c and why?

        const result = multiply(a, b);
        expect(result).equal(c);

        // When we substract char, result will be converted to a number
        // When we add char will be converted to string 
        // result will be converted to number
        // c is 156
    });

    it('should return the correction answer - question eight', () => {
        // What is the output of

        const a = Math.max();
        const b = Math.min();
        const c = -1; // what is the value of c and why?

        console.log(Math.max())
        console.log(Math.min())

        const result = isGreaterThan(a, b);
        expect(result).equal(c);

        // In JavaScript, Math.min() is Infinity
        // and, Math.max is minus Infinity
        // c is false
    });

    it('should return the correction answer - question nine', () => {
        // What is the output of

        const result = factorial(4).result;
        const c = 24;
        expect(result).equal(c); // will the outout change and why?

        // yes
        // In JavaScript, semicolon will be inserted automatically
        // no longer get expected output
    });

});
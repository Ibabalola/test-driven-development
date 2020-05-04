import { expect } from 'chai';
import { getUserByUsername } from './db';
import { getDatabaseData, setDatabaseData, resetDatabase } from './test-helpers';

const fakeData = [{
    id: '123',
    username: 'abc',
    email: 'abc@gmail.com'
}, {
    id: '124',
    username: 'wrong',
    email: 'wrong@wrong.com'
}];

describe('getUserbyUsername', () => {
    beforeEach('setting up the database', async () => {
        await setDatabaseData('users', fakeData);
    });

    afterEach('reset the database', async () => {
        await resetDatabase();
    });

    it('should get the correct user from the database given a username', async () => {
        const actual = await getUserByUsername('abc');
        const finalDBState = await getDatabaseData('users');
        const expected = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com'
        };

        // we expect the actual value excluding the _id to equal our expected value
        expect(actual).excludingEvery('_id').to.deep.equal(expected);
        expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);
    });
});
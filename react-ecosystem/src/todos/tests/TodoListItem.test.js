import { expect } from 'chai';
import { getBorderStyleForDate } from '../TodoListItem';

describe('getBorderStyleForDate', () => {
    it('returns none when the date is less than five days ago', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 3); // 1 day = 86 million 400 thousand milli seconds

        const expected = 'none';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);
    });
    it('returns a border when the date is more than five days ago', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 7); // 1 day = 86 million 400 thousand milli seconds

        const expected = '2px solid red';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);
    })
});
import data from "../../data/courses.json";

const numItems = data.length;

test('Number of item = 12', () => {
    expect(numItems).toBe(12);
});

test('Number of items to be greater than or euqal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
});

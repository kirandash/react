import data from "../../data/courses.json";

const numItems = data.length;

test('Number of item = 12', () => {
    // expect(numItems).toBe(11); // fail
    expect(numItems).toBe(12);
});

test('Number of items to be greater than or euqal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('There is a JS in the title', () => {
    expect(dataTest).toMatch(/JS/);
});


test('The title contains React', () => {
    // expect(dataTest).toContain('Angular'); // fail
    expect(dataTest).toContain('React');
});

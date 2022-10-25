const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
    expect(findShortestString(["hello, my name's Zac"])).toBe('my');
    expect(findShortestString(['Super', 'Trouper'])).toBe('Super');
});
test("findShortestString finds the earliest string in cases of joint-shortest strings", () => {
    expect(findShortestString(['find', 'shortest', 'sing'])).toBe('find');
    expect(findShortestString(['!', '?'])).toBe('!')
})
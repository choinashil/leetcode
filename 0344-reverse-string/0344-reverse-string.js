/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const length = s.length;
    for (let i = 0; i < Math.ceil(length / 2); i++) {
        let temp = s[i];
        s[i] = s[length - i - 1];
        s[length - i - 1] = temp;
    }
};
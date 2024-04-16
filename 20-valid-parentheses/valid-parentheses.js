/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        "(": ')',
        "{": "}",
        "[": "]"
    };

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if (!stack.length) {
                return false;
            }

            const item = stack.pop();

            if (map[item] !== s[i]) {
                return false;
            }
        }
    }

    return !stack.length;
};
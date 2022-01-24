/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const pair = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (pair[s[i]]) {
      stack.push(pair[s[i]]);
    } else {
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length ? false : true;
};
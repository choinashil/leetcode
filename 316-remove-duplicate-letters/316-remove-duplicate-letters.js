/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const stack = [s[0]];
  
  for (let i = 1; i < s.length; i++) {
    const current = s[i];
    if (stack.includes(current)) {
      continue;
    } else {
      while (stack.length && stack[stack.length - 1] > current && s.slice(i).includes(stack[stack.length - 1])) {
        stack.pop();
      }
      stack.push(current);
    }
  }
  return stack.join('');
};
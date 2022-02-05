/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let answer = s[0];
  
  for (let i = 0; i < s.length; i++) {
    const target = s[i];
    const rest = s.slice(i + 1);
    let sameLetterIdx = s.indexOf(target, i + 1);
    
    while (sameLetterIdx > i && s.slice(sameLetterIdx).includes(target)) {
      let left = i;
      let right = sameLetterIdx;
      let isPalindrome = true;

      while (left <= right) {
        if (s[left] === s[right]) {
          left++;
          right--;
        } else {
          isPalindrome = false;
          break;
        }
      }

      if (isPalindrome && answer.length < s.slice(i, sameLetterIdx + 1).length) {
        answer = s.slice(i, sameLetterIdx + 1);
      }
      
      sameLetterIdx = s.indexOf(target, sameLetterIdx + 1);
    }
  }

  return answer;
};

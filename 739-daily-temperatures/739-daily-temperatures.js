/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  const answer = [];
  let count = 0;
  
  for (let i = 0; i < temperatures.length; i++) {
    const current = temperatures[i];
    
    for (let j = i + 1; j < temperatures.length; j++) {
      if (current < temperatures[j]) {
        answer.push(++count);
        count = 0;
        break;
      } else {
        count++;
      }
    }

    if (count || i === temperatures.length - 1) {
      answer.push(0);
      count = 0;
    }
  }
  
  return answer;
};

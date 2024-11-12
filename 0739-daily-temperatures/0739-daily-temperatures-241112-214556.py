class Solution:
  def dailyTemperatures(self, temperatures):
    stack = []
    answer = [0] * len(temperatures)

    for i, temperature in enumerate(temperatures):
      while len(stack) and temperatures[stack[-1]] < temperature:
        prev_i = stack.pop()
        answer[prev_i] = i - prev_i
      stack.append(i)
    
    return answer
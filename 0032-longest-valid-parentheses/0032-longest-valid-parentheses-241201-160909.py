class Solution:
    def longestValidParentheses(self, s):
        stack = []
        result = [False] * len(s)
        cur_count = 0
        max_count = 0

        for i in range(len(s)):
            if s[i] == '(':
                stack.append(i)
            else:
                if len(stack):
                    result[stack.pop()] = True
                    result[i] = True

        for r in result:
            if r:
                cur_count += 1
            else:
                max_count = max(max_count, cur_count)
                cur_count = 0
        
        return max(max_count, cur_count)
        
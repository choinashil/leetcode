class Solution:
    def isValid(self, s: str) -> bool:      
        dict = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        stack = []

        for c in s:
            if c == '(' or c == '{' or c == '[':
                stack.append(c)
            else:
                if not len(stack):
                    return False
                if dict[stack.pop()] == c:
                    continue
                else:
                    return False
        
        return not len(stack)
class Solution:
    def combine(self, n, k):
        def backtrack(start, curr):       
          if len(curr) == k:
              result.append(curr[:])
              return

          for num in range(start, n + 1):
              curr.append(num)
              backtrack(num + 1, curr)
              curr.pop()

        result = []
        backtrack(1, [])
        return result

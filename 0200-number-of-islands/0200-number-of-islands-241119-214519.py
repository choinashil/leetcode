class Solution:
    def numIslands(self, grid):
        def bfs(q):
            while q:
              cur_r, cur_c = q.popleft()
              # visited[cur_r][cur_c] = True

              for i in range(4):
                next_r, next_c = cur_r + dr[i], cur_c + dc[i]

                if 0 <= next_r < len_r and 0 <= next_c < len_c and grid[next_r][next_c] == '1':
                    if not visited[next_r][next_c]:
                        visited[next_r][next_c] = True
                        q.append((next_r, next_c))
                
        q = deque()

        len_r, len_c = len(grid), len(grid[0])
        visited = [[False] * len_c for _ in range(len_r)]
        dr = [0, 1, 0, -1]
        dc = [1, 0, -1, 0]
        count = 0

        for r in range(len_r):
            for c in range(len_c):
                if grid[r][c] == '1' and visited[r][c] == False:
                    q.append((r, c))
                    bfs(q)
                    count += 1

        return count
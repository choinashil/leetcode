class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        def dfs(room):
            if room in visited and visited[room]:
                return
            
            visited[room] = True
            
            for key in rooms[room]:
                dfs(key)
            
        visited = {}
        dfs(0)
        return len(rooms) == len(visited)
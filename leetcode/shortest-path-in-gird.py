# 0 == Flase 가 True여서 3시간을 헤맸다
from collections import deque;
f = False
mn = 1000000000
class Solution:
  def shortestPath(self, grid, k):
    global f
    global mn
    f = False
    mn = 1000000000
    m = len(grid)
    n = len(grid[0])
    if m == 1 and n == 1 :
      return 0
    v = []
    for _ in range(m):
      v.append([False for __ in range(n)])
    q = deque()  
    q.append([0,0,k,0])
    v[0][0] = k
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    def bfs():
      global f
      global mn
      x,y,r,c = q.popleft()
      for kk in range(4):
        xx = x + dx[kk]
        yy = y + dy[kk]
        if (0<=xx<n and 0<=yy<m):
          if xx==n-1 and yy==m-1:
            f=True
            mn=c+1
            return mn
          if grid[yy][xx]==1:
            if v[yy][xx]==False or 0 <= v[yy][xx]<r-1:
              if r>0:
                v[yy][xx]=r-1
                q.append([xx,yy,r-1,c+1])
          elif grid[yy][xx]==0:
            if v[yy][xx]==False or 0 <= v[yy][xx]<r:
              if (type(v[yy][xx]) is not bool and v[yy][xx] == 0 and r == 0):
                continue
              #print(v[yy][xx], r, v[yy][xx] == r )
              v[yy][xx]=r
              q.append([xx,yy,r,c+1])
    while q:
      bfs()        
      if f:
        return mn
    return -1
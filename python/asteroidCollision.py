class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        right = len(asteroids) - 1
        left = right - 1
        while left >= 0 and right >= 1:
            if asteroids[right] < 0 and asteroids[left] > 0:
                if -asteroids[right] == asteroids[left]:
                    asteroids.pop(right)
                    asteroids.pop(left)
                    right-=1
                    left-=1
                    if right > len(asteroids)-1:
                        right-=1
                        left-=1
                elif -asteroids[right] > asteroids[left]:
                    asteroids.pop(left)
                    right-=1
                    left-=1
                else:
                    asteroids.pop(right)
                    if right >= len(asteroids):
                        right-=1
                        left-=1
            else:
                right-=1
                left-=1
        return asteroids

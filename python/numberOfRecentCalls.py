class RecentCounter:

    def __init__(self):
        self.requests = []
        self.recent_requests = []

        

    def ping(self, t: int) -> int:
        self.requests.append(t)
        self.recent_requests.append(t)
        recent_requests = [ x for x in self.recent_requests if x + 3000 >= t]
        self.recent_requests = recent_requests
        return len(recent_requests)

class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        senate = list(senate)
        R, D = deque(), deque()

        for idx, char in enumerate(senate):
            if char == 'R':
                R.append(idx)
            else:
                D.append(idx)
        
        while R and D:
            dCurr = D.popleft()
            rCurr = R.popleft()

            if rCurr < dCurr:
                R.append(rCurr + len(senate))
            else:
                D.append(dCurr + len(senate))

        return 'Radiant' if R else 'Dire'

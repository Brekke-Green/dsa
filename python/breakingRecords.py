def breakingRecords(scores):
    h = scores[0]
    l = scores[0]
    result = [0, 0]
    for score in scores:
        if score > h:
            h = score
            result[0]+=1
        if score < l:
            l = score
            result[1]+=1
    return result

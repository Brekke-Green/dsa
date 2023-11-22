def matchingStrings(stringList, queries):
    result = []
    for string in queries:
        counter = 0
        for value in stringList:
            if value == string:
                counter+=1
        result.append(counter)
    return result

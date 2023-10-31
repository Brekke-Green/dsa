func strStr(haystack string, needle string) int {
    haystackArr := strings.Split(haystack, "")
    needleArr := strings.Split(needle, "")
    var found bool

    for i := 0; i <= len(haystackArr) - len(needleArr); i++ {
        if haystackArr[i] != needleArr[0] {
            continue
        } else {
            found = checkForNeedle(haystackArr[i:i+len(needle)], needleArr)
            if found {
                return i
            }
        }
    }
    return -1
}

func checkForNeedle(haystackArr []string, needleArr []string) bool {
    substring := strings.Join(haystackArr, "")
    needleStr := strings.Join(needleArr, "")
    return strings.Compare(substring, needleStr) == 0
}


// Brekke Green - Codewars => return array of anagrams from target word
// passed all tests

function compareWords(target, test) {
    let letters = Object.keys(target);
    for (let i = 0; i < letters.length; i++) {
        if (test[letters[i]] !== target[letters[i]]) {
        return false
        } else {
        delete test[letters[i]]
        }
    }
    return Object.keys(test).length > 0 ? false : true; 
}
  
function countLetters(word) {
    let letterCount = {};
    for (let i = 0; i < word.length; i++) {
        if (letterCount[word[i]]) {
        letterCount[word[i]] += 1;
        } else {
        letterCount[word[i]] = 1;
        }
    }
    return letterCount;
}

// test function
function anagrams(word, words) {
    let targetWord = countLetters(word);
    let results = [];
    let wordsArr = [];

    words.forEach(word => {
        wordsArr.push(countLetters(word))
    })

    wordsArr.forEach((wordObj, i) => {
        if (compareWords(targetWord, wordObj)) {
        results.push(words[i])
        }
    })
    return results;
}
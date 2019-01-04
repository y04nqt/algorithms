function anagrams (stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    
    for (let char in a aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    
    return true;
}

function buildCharMap () {
    const charMap = {};
    
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    
    return charMap;
}
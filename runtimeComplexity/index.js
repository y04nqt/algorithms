
// O(n)
function reverseString(str) {
    let reversed = '';

    for (let char of str) {
        reverse = char + reversed;
    }

    return reversed;
}

// O(n^2)
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
    }
    
    console.log(stair);
}
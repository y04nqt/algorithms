
// using loop
function fib(n) {
    const result = [0, 1];
    
    for (let i = 2; i <= n; i++){
        const a = result[i - 1];
        const b = result[i - 2];
        
        result.push(a + b);
    }
    
    return result[n];
}

// using recursion
function fibRec(n) {
    if (n < 2) {
        return n;
    }
    return fibRec(n - 1) + fibRec(n - 2);
}
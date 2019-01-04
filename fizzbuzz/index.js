function fizzBuzz (n) {
    for( let i = 1; i <= n; i++) {
        let printThis = '';
        if (i % 3 === 0) {
            printThis += 'fizz'
        }
        if (i % 5 === 0) {
            printThis += 'buzz'
        }
        console.log(i, printThis)
    }
}
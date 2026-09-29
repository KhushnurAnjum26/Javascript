function memoize(fn) {

    let cache = {};

    return function(n) {

        if (cache[n]) {
            console.log("From cache");
            return cache[n];
        }

        let result = fn(n);

        cache[n] = result;

        return result;
    };
}

function factorial(n) {

    if (n == 0 || n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

let memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
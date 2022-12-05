function Primes(maxNum) {
    var primes = [], nonprimes = [], n, i;
    for (n = 2; n <= maxNum; n++) {
        if (!nonprimes[n]) {primes.push(n)}
        for (i = n * 2; i <= maxNum; i += n) {
            nonprimes[i] = true;
        }
    }
    return primes;
}

console.time("PrimesTiming");
console.log(Primes(process.argv[2]));
console.timeEnd("PrimesTiming");
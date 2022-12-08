import time

def prime_nums(max_num):
    primes = []
    nonprimes = set()

    for n in range(2, max_num + 1):
        if n not in nonprimes:
            primes.append(n)
        for i in range(n * 2, max_num + 1, n):
            nonprimes.add(i)
    return primes
    
number = int(input("Enter a number: "))
start = time.time()
print(prime_nums(number))
print(f'{time.time() - start} seconds')
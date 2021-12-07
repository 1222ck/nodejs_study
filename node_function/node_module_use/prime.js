// 소수의 개수를 구하는 작업(워커 스레드를 사용하지 않음)
// 2부터 1000만까지의 숫자 중 소수가 몇 개 있는지를 알아내는 코드

const min = 2;
const max = 10000000;

const primes = []; // primes라는 배열 설정

function generatePrimes(start, range) {
    let isPrime = true;
    const end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}

console.time('prime');
generatePrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);
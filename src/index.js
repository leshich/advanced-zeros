module.exports = function getZerosCount(number, base) {
  const primes = primeFactorization(base);

  let result = 0;
  Object.keys(primes).forEach((pow) => {
    let zerosCount = 0;
    let currNumber = number;
    const prime = primes[pow];
    while (currNumber > 0) {
      currNumber /= prime;
      zerosCount += Math.floor(currNumber);
    }
    zerosCount = Math.floor(zerosCount / pow);
    if (!result || result > zerosCount) {
      result = zerosCount;
    }
  });
  return result;
}

function primeFactorization(base) {
  const primes = {};
  for (let i = 2; i <= base; i++) {
    let pow = 0;
    while ((base % i) === 0) {
      pow++;
      base /= i;
    }
    if (pow) {
      if (!primes[pow] || primes[pow] < i)
      primes[pow] = i;
    }
  }

  return primes;
}
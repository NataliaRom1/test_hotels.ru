function isPrime(num) {
  let res = "является простым числом";

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      res = "не является простым числом"
      break
    }
  }

  return (num + " " + res);
}

isPrime(0)
isPrime(1)
isPrime(2)
isPrime(3)
isPrime(4)
isPrime(20)
isPrime(23)
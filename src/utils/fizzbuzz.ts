const fizzBuzz = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number)) throw new Error('Parameter provided is not a number');

  const fizz = number % 3 === 0;
  const buzz = number % 5 === 0;

  if (fizz && buzz) return 'fizzbuzz';
  if (fizz) return 'fizz';
  if (buzz) return 'buzz';

  return number;
};

export default fizzBuzz;

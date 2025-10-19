function perfectnumbers(number) {
  if (number <= 1) {
    return false;
  }

  let sum = 1;
  for (let i = 2; i < number; i++) { 
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum; 
}
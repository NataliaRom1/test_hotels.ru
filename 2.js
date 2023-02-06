function numders(num) {
  if (num % 5 == 0) {
    num;
  } else if (num % 5 <= 2.5) {
    num = num - num % 5;
  } else if (num % 5 >= 2.5) {
    num = num + (5 - num % 5);
  }
  
  return num;
}

numders(27)
numders(27.8)
numders(41.7)
//27 => 25, 27.8 => 30, 41.7 => 40
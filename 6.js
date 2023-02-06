// дорешать

function multiplicationTable(num) {
  let tabel = "";
  let res = "  ";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i == 0 && j > 0) {
        res += j;
      } else if (j == 0 && i > 0) {
        res += i;
      } else if (i > 0 && j > 0) {
        res += (i * j) + ' ';
      }
    }
    res += "\n";
  }

  console.log(res);
  return res;
}

multiplicationTable(3)
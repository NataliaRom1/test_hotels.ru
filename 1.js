function cities(arr) {
  let str = arr.join(', ');
  let newStr = str.padEnd(str.length + 1, ".");

  return newStr;
}

cities(['Москва', 'Санкт - Петербург', 'Воронеж']);
// «Москва, Санкт - Петербург, Воронеж.» 
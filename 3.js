function computer(num) {
  let str = String(num);
  let lastSymb = str[str.length - 1];
  let res = "";

  if (num == 1 || lastSymb == '1') {
    res = "компьютер"
  } else if (num == 2 || num == 3 || num == 4 || lastSymb == '2' || lastSymb == '3' || lastSymb == '4') {
    res = "компьютера"
  } else {
    res = "компьютеров"
  }
  
  return num + " " + res;
}

computer(25)
computer(41)
computer(1048)
computer(2027)


//  «25 компьютеров», «41 компьютер», «1048 компьютеров».
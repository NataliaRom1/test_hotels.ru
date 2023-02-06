function duplicates(arr) {
  let res = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        if (!res.includes(arr[i]))
        res.push(arr[i]);
        break
      }
    }
  }
  return res;
}

function sameNumbers(arr1,arr2) {
  let res1 = duplicates(arr1);
  let res2 = duplicates(arr2);
  let res = res1.filter(el => res2.indexOf(el) != -1).sort();
  return res;
}

sameNumbers([], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1])
sameNumbers([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1])
sameNumbers([1, 2, 2, 2], [2, 2, 1])
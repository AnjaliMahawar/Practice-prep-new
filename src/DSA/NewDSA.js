/* eslint-disable no-unused-expressions */
const isPalindrom = (num) => {
  // eslint-disable-next-line no-unused-expressions
  if (num < 0) {
    return false;
  }
  if (num === +num.toString().split("").reverse().join("")) {
    console.warn(`given Number ${num} is Palindrom`);
  } else {
    console.error(`given number ${num}  is not Palindrom`);
  }
};
isPalindrom(121);

const fibonacci = (n) => {
  const arr = [0, 1];
  // eslint-disable-next-line no-undef
  for (i = 2; i <= n; i++) {
    console.log("arr[i - 1]", "i=", i, arr[i - 1], arr[i - 2]);
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log("arr", arr);
  return arr;
};
fibonacci(5);

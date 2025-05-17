const isPalindrom = (num) => {
  return num == num.toString().split("").reverse().join("");
};
const result = isPalindrom(121);
// console.log("result",result)

const fibonacci = (n) => {
  const arr = [0, 1];
  for (i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

const fibres = fibonacci(5);
// console.log("fib",fibres)



const arr = [2, 4, 6, 2, 6, 9, 7, 3, 4, 5];

const result = arr.filter((el) => {
  if (arr.indexOf(el) === arr.lastIndexOf(el)) {
    return el
  }
})

console.log("resulttt",result)
const myArray = [1, 2, 2, 3, 4, 4, 5];
// Create a Set from the input array, which automatically removes duplicates
const uniqueArrayWithSet = Array.from(new Set(myArray));
// Method 2: Using a loop and filtering duplicates
// Create an empty array to store the unique elements
const uniqueArrayWithLoop = [];
// Iterate through the input array
for (let i = 0; i < myArray.length; i++) {
  // Check if the current element is not already in the uniqueArray
  if (uniqueArrayWithLoop.indexOf(myArray[i]) === -1) {
    // If not found, add it to the uniqueArray
    uniqueArrayWithLoop.push(myArray[i]);
  }
}
// console.log(uniqueArrayWithLoop.indexOf(myArray[2]),";;;;;;;;;;;;;;")
// // Display the unique arrays
// console.log("Unique Array with Set:", uniqueArrayWithSet);
// console.log("Unique Array with Loop:", uniqueArrayWithLoop);

// remove duplicate objects from array

const arr1 = [{ name: 'jonny', age: 40 }, { name: 'tom', age: 30 }, { name: 'jonny', age: 40 }]

const result1 = Array.from(new Set(arr1.map(el => JSON.stringify(el)))).map((el) => JSON.parse(el));
const result2 = Array.from(new Set(arr1.map(val => JSON.stringify(val)))).map(val => JSON.parse(val))
//console.log(result2)
// console.log("newUniqe",newUniuq)

// / Find missing numbers in array

const arr3 = [3, 6, 12, 6, 9];

const count = Math.max(...arr);
const min = Math.min(...arr)

const missing = [];

for (let i = min; i <= count; i++) {
  if (arr.indexOf(i) == -1) {
    missing.push(i)
  }
}
console.log(missing, ",,")

//max and min of the arraym
const maxMin = [10, 12, 3, 12, 15, 16, 17, 1, 3, 4, 7, -1]
let maxOfArray = maxMin[0];
let minOfArray = maxMin[0]

for (let i = 0; i < maxMin.length; i++) {
  if (maxMin[i] > maxOfArray) {
    maxOfArray = maxMin[i]
  }
  if (maxMin[i] < minOfArray) {
    minOfArray = maxMin[i]
  }
}
// console.log("Maximum number:", maxOfArray);
// console.log("min of array",minOfArray)

//string is palindrom or not 
const palindromCheck = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return 'its not palindrom'
    }
    return 'its palindrom'
  }
}

const callPalindrom = palindromCheck('12321')
// console.log("string",callPalindrom)

const data = { "Amit": "TL", "Ravi": "HR", "Reena": 'PM', "Mohan": "TL", "Kapil": "TL", "Rajesh": "HR", "Geeta": "TL" };

// // Create an empty object to store the expected output
// const expectedOutput = {};

// // Iterate through the data object
// for (const name in data) {
//   const role = data[name];
//   console.log("role,",role)

//   // If the role is not in the expectedOutput, create an array for it
//   if (!expectedOutput[role]) {
//     expectedOutput[role] = [];
//   }
// console.log("expectedOutput[role] ",expectedOutput[role] )
//   // Push the name to the appropriate role array
//   expectedOutput[role].push(name);
// }

const expectedOutput = {};
for (const key in data) {
 
  const role = data[key]
  if (!expectedOutput[role]) {
    expectedOutput[role] = []
  }
 expectedOutput[role].push(key)
 console.log("expectedoutput",expectedOutput)
}

//reverse
var newstr=''
const random='random'
function abc(str){
    for(var i=str.length-1;i>=0;i--){
      newstr=newstr+str[i]
    //   console.log("newstr",newstr)
    }
  return newstr
}
var res=abc(random)
console.log("res",res)

const str ="MyNameAnjali"
var resStr=''
for(i=0;i<str.length;i++){
    if(i>0&&str[i]===str[i].toUpperCase()){
          resStr +=' '; 
    }
   resStr+=str[i]
}   
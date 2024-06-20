// function palindrome(str) {
//   let j = str.length - 1
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[j]) {
//       return false
//     }
//     j--
//   }
//   return true
// }
// let str1 = "racecar"
// let str2 = "hello"
// let str3 = "nitin"

// function reverseString(str) {
//   return str.split("").reverse().join("")
// }
// console.log(reverseString("hello"))
// console.log(palindrome("nitin"))
// function factorialize(num) {
//   if (num < 0) return -1
//   else if (num == 0) return 1
//   if (num) {
//     return num * factorialize(num - 1)
//   }
// }
// console.log(factorialize(12))

// function findLongestWord(str) {
//   let largest = ""
//   console.log(str.split(" "))
//   str = str.split(" ")
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].length > largest.length) {
//       largest = str[i]
//     }
//   }
//   return largest
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // 6

// function palindrome(str) {
//   let len = str.length
//   for (let i = 0; i < len; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false
//     }
//   }
//   return true
// }
// // Example usage:
// console.log(palindrome("da")) // Should return false
// console.log(palindrome("ititi")) // Should return true
// function recursion(num) {
//   if (num == 0) return 1
//   if (num) {
//     return num * recursion(num - 1)
//   }
// }
// // console.log(recursion(5))
// function fizzBuzz() {
//   // Your code here
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz")
//     } else if (i % 3 == 0) {
//       console.log("Fizz")
//     } else if (i % 5 == 0) {
//       console.log("Buzz")
//     } else {
//       console.log(i)
//     }
//   }
// }

// // fizzBuzz()
// function mergeObjects(obj1, obj2) {
//   if (obj2.b < obj1.b) return { ...obj2, ...obj1 }
//   if (obj2.b > obj1.b) return { ...obj1, ...obj2 }
// }
// const obj1 = { b: 23, a: 1 }
// const obj2 = { b: 21, c: 4 }
// // console.log(mergeObjects(obj1, obj2))

// function printEvenNumber() {
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//       console.log(i)
//     }
//   }
// }
// // printEvenNumber()
// function printNotEvenNumber() {
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//       console.log(i)
//     }
//   }
// }
// // printNotEvenNumber()

// function tablePrint() {
//   const number = parseInt(1)

//   //creating a multiplication table
//   for (let i = 1; i <= 10; i++) {
//     // multiply i with number
//     const result = i * number

//     // display the result
//     console.log(`${number} * ${i} = ${result}`)
//   }
// }
// // tablePrint()

// function lengthConverter(str) {
//   let len = str.length
//   return len
// }

// // console.log(lengthConverter("123123123123123123123213"))
// function fizzfuzz() {
//   for (let i = 0; i < 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) console.log("Fizzfuzz")
//     else if (i % 3 == 0) {
//       console.log("Fizz")
//     } else if (i % 5 == 0) {
//       console.log("Fuzz")
//     } else {
//       console.log(i)
//     }
//   }
// }
// // fizzfuzz()
// function re(num) {
//   if (num === 0) return 232323232
//   return num * re(num - 1)
// }
// // console.log(re(7))

// function sumArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const sum = arr.reduce((a, b) => a + b)
//     return sum
//   }
// }

// // Example usage:
// // console.log(sumArray([1, 2, 3, 4, 5])) // Should return 15
// // console.log(sumArray([10, 20, 30])) // Should return 60
// function isEven(num) {
//   if (num % 2 == 0) return "even"
//   if (num % 2 !== 0) return "not even"
// }
// // Example usage:
// // console.log(isEven(4)) // Should return true
// // console.log(isEven(7)) // Should return false
// function reverseString(str) {
//   let word = str.split(",").reverse().join("")
//   return word
// }

// console.log(reverseString("hello")) // Should return "olleh"
// function findMax(arr) {
//   let max = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }
// // console.log(findMax([1, 2, 3, 4, 5])) // Should return 5
// // console.log(findMax([10, 20, 30])) // Should return 30

// function fuzuzz() {
//   for (let i = 0; i < 111; i++) {
//     if (i % 3 == 0 && i % 5 == 0) console.log("hello")
//     if (i % 3 == 0) console.log("olleh")
//     if (i % 5 == 0) console.log("shit")
//     console.log(i)
//   }
// }
// // fuzuzz()

// function faziziz() {
//   for (let i = 0; i < 100; i++) {
//     if (i % 3 == 0 && i % 6 == 0) console.log("hello")
//     if (i % 3 == 0) console.log("olleh")
//     if (i % 6 == 0) console.log("shit")
//     console.log(i)
//   }
// }
// // faziziz()
// function removeDuplicates(arr) {
//   let duplicated = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j] && !duplicated.includes(arr[i])) {
//         duplicated.push(arr[i])
//       }
//     }
//   }
//   return duplicated
// }

// // Example usage:
// // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) // Should return [1, 2, 3, 4, 5]
// // console.log(removeDuplicates([10, 10, 20, 20, 30])) // Should return [10, 20, 30]

function factorial(n) {
  if (n == 0) {
    return 1
  } else {
    return n * factorial(n - 1)
    function reverseString(str) {
      return str.split("").reverse().join("")
    }
    console.log(reverseString("hello"))
    console.log(palindrome(str3))
    function factorialize(num) {
      if (num < 0) return -1
      else if (num == 0) return 1
      if (num) {
        return num * factorialize(num - 1)
      }
    }
    // console.log(factorial(5))
  }
  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]

  // function merge(arr1, arr2) {
  //   const result1 = [...arr1, ...arr2]
  //   const result2 = arr1.concat(arr2)
  //   let mergedArray = [...array1]
  //   for (let i = 0; i < array2.length; i++) {
  //     let result3 = mergedArray.push(array2[i])
  //   console.log(result3)
  //     }
  //   for (let i = 0; i < array2.length; i++) {
  //     mergedArray.push(array2[i]);
  // }
  //   console.log(result1)
  //   console.log(result2)
  // let array1 = [1, 2, 3]
  // let array2 = [4, 5, 6]
  // Array.prototype.push.apply(array1, array2)
  // console.log(array1)
}

// merge()

function findthelastWord(array) {
  let longestWord = ""
  console.log(array.split(" "))
  array = array.split(" ")
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i]
    }
  }
  return longestWord
}
console.log(findthelastWord("hello world howsadfdasfas you doing"))
// function findLongestWord(str) {
//   let largest = ""
//   console.log(str.split(" "))
//   str = str.split(" ")
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].length > largest.length) {
//       largest = str[i]
//     }
//   }
//   return largest
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // 6

function palindrome(str) {
  let len = str.length
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true
}
// Example usage:
console.log(palindrome("da")) // Should return false
console.log(palindrome("ititi")) // Should return true
function recursion(num) {
  if (num == 0) return 1
  if (num) {
    return num * recursion(num - 1)
  }
}
// console.log(recursion(5))
function fizzBuzz() {
  // Your code here
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 == 0) {
      console.log("Fizz")
    } else if (i % 5 == 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}

// fizzBuzz()
function mergeObjects(obj1, obj2) {
  if (obj2.b < obj1.b) return { ...obj2, ...obj1 }
  if (obj2.b > obj1.b) return { ...obj1, ...obj2 }
}
const obj1 = { b: 23, a: 1 }
const obj2 = { b: 21, c: 4 }
// console.log(mergeObjects(obj1, obj2))

function printEvenNumber() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}
// printEvenNumber()
function printNotEvenNumber() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
      console.log(i)
    }
  }
}
// printNotEvenNumber()

function tablePrint() {
  const number = parseInt(1)

  //creating a multiplication table
  for (let i = 1; i <= 10; i++) {
    // multiply i with number
    const result = i * number

    // display the result
    console.log(`${number} * ${i} = ${result}`)
  }
}
// tablePrint()

function lengthConverter(str) {
  let len = str.length
  return len
}

// console.log(lengthConverter("123123123123123123123213"))
function fizzfuzz() {
  for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("Fizzfuzz")
    else if (i % 3 == 0) {
      console.log("Fizz")
    } else if (i % 5 == 0) {
      console.log("Fuzz")
    } else {
      console.log(i)
    }
  }
}
// fizzfuzz()
function re(num) {
  if (num === 0) return 232323232
  return num * re(num - 1)
}
// console.log(re(7))

function sumArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sum = arr.reduce((a, b) => a + b)
    return sum
  }
}

// Example usage:
// console.log(sumArray([1, 2, 3, 4, 5])) // Should return 15
// console.log(sumArray([10, 20, 30])) // Should return 60
function isEven(num) {
  if (num % 2 == 0) return "even"
  if (num % 2 !== 0) return "not even"
}
// Example usage:
// console.log(isEven(4)) // Should return true
// console.log(isEven(7)) // Should return false
function reverseString(str) {
  let word = str.split(",").reverse().join("")
  return word
}

console.log(reverseString("hello")) // Should return "olleh"
function findMax(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
// console.log(findMax([1, 2, 3, 4, 5])) // Should return 5
// console.log(findMax([10, 20, 30])) // Should return 30

function fuzuzz() {
  for (let i = 0; i < 111; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("hello")
    if (i % 3 == 0) console.log("olleh")
    if (i % 5 == 0) console.log("shit")
    console.log(i)
  }
}
// fuzuzz()

function faziziz() {
  for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 6 == 0) console.log("hello")
    if (i % 3 == 0) console.log("olleh")
    if (i % 6 == 0) console.log("shit")
    console.log(i)
  }
}
// faziziz()
function removeDuplicates(arr) {
  let duplicated = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicated.includes(arr[i])) {
        duplicated.push(arr[i])
      }
    }
  }
  return duplicated
}

// Example usage:
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) // Should return [1, 2, 3, 4, 5]
// console.log(removeDuplicates([10, 10, 20, 20, 30])) // Should return [10, 20, 30]

function getwordlength(str) {
  const words = str.split(" ")
  let wordslength = words.map((word) => word.length)
  return console.log(wordslength)
}

function palindrome1(str) {
  let j = str.length - 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[j]) {
      return false
    }
    j--
  }
  return true
}
// console.log(palindrome1("heloo"))

let sentence = "words are like this is asnot fdasdgood acquisition blabla"

function biggestwrwrw(str) {
  let words = str.split(" ")
  console.log(words)
  let biggestWord = ""
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > biggestWord.length) {
      biggestWord = words[i]
    }
  }
  return biggestWord
}

// console.log(biggestwrwrw(sentence))
function findLongestWord(str) {
  let largest = ""
  console.log(str.split(" "))
  str = str.split(" ")
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > largest.length) {
      largest = str[i]
    }
  }
  return largest
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // 6
function papapa(str) {
  str = str.split(" ")
  const lengths = []
  for (let i = 0; i < str.length; i++) {
    const word = str[i]
    lengths.push(word.length)
  }
  return lengths
}

// console.log(papapa("racecar is potentially receed to the the the sunset"))
// const array = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3]

// const countOccurrences = (arr) => {
//   const counts = {}
//   for (const num of arr) {
//     counts[num] = counts[num] ? counts[num] + 1 : 1
//   }
//   return counts
// }

// console.log(countOccurrences(array))

function reveresedString(str) {
  let reversed = str.split("").reverse().join("")
  return reversed
}
console.log(reveresedString("hello"))
function fuzzfuzz() {
  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fuzzfuzz")
    } else if (i % 3 === 0) {
      console.log("fuzz")
    } else if (i % 5 === 0) {
      console.log("fiiizz")
    } else {
      console.log(i)
    }
  }
}
// fuzzfuzz()

// function summofArray(arr) {
//   let sum = arr.reduce((i, j) => i + j)
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return console.log(sum)
// }
// summofArray(array)

// function papapalindromromr(str) {
//   let j = str.length - 1
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[j]) {
//       return false
//     }
//     j--
//   }
//   return true
// }
// console.log(papapalindromromr("racecar"))

// const array = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3]
// function getKeyByValue(object, value) {
//   return Object.keys(object).find((key) => object[key] === value)
// }

// const myfunctionyey = (arr) => {
//   const count = {}
//   for (let i = 0; i < arr.length; i++) {
//     if (!count[array[i]]) {
//       count[array[i]] = 1
//     } else {
//       count[array[i]] = count[array[i]] + 1
//     }
//   }
//   const myHighestMostWonderfullnessNumberIHaveInCount = Math.max(...Object.values(count))

//   return getKeyByValue(count, myHighestMostWonderfullnessNumberIHaveInCount)
// }

// console.log(myfunctionyey(array))

// // {1:5,2:8,3:5}

// function recursionMethod(n) {
//   if (n == 0) {
//     return 1
//   } else {
//     return ( n * recursionMethod(n - 1))
//   }
// }
// console.log(recursionMethod(5))
// var createcounter = (init) => {
//   function increment() {
//     return (init = init + 1)
//   }
//   function decrement() {
//     return (init = init - 1)
//   }
//   function reset() {
//     return (init = 0)
//   }
//   return {
//     increment,
//     decrement,
//     reset,
//   }
// }
// console.log(createcounter(5).decrement())
// var map = function(arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//       result.push(fn(arr[i]));
//   }
//   return result;
// };

// // Example usage:
// let result = map([1, 2, 3], function(x) {
//   return x + 1;
// });
// console.log(result);  // Outputs: [2, 3, 4]

// var filter = function(arr, fn) {
//   var ar=[];
//   for(var i=0; i<arr.length; i++){
//       if(fn(arr[i], i)){
//           ar.push(arr[i]);
//       }
//   }
//   return ar;
// };

var reduce = function (nums, fn, init) {
  let accumulator = init
  for (let num of nums) {
    accumulator = fn(accumulator, num)
  }
  return accumulator
}

// Example usage:
const nums = [1, 2, 3, 4]
const reducer = (acc, curr) => acc + curr
const initial = 0

console.log(reduce(nums, reducer, initial)) // Output: 10

const words = "hello world"
function capitalizeFirstLetterOfEachWord(letter) {
  if (!letter) return ""
  return letter
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ")
}

console.log(capitalizeFirstLetterOfEachWord(words))
const array = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3]

function countoccurrences(str) {
  let count = {}
  let maxlength = 0
  let key = ""
  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (count[char]) {
      count[char]++
    } else {
      count[char] = 1
    }
    if (count[char] > maxlength) {
      maxlength = count[char]
      key = char
    }
  }
  return { count, maxlength, key }
}
// console.log(countoccurrences(array))

function countOccurencesWithMap(str) {
  let count = {}
  let maxlength = 0
  let key = ""

  str.map((item) => {
    if (count[item]) {
      count[item]++
    } else {
      count[item] = 1
    }

    if (count[item] > maxlength) {
      maxlength = count[item]
      key = item.toString() // Convert item to string if necessary
    }
  })
  return { count, maxlength, key }
}
// console.log(countOccurencesWithMap(array))

const findLongestWord2 = (str) => {
  let words = str.split(" ")
  let longestWord = ""
  words.forEach((item) => {
    if (!longestWord || item.length > longestWord.length) {
      longestWord = item
    }
  })
  return longestWord
}
// console.log(findLongestWord2("join me together"))

const findLongestWord3 = (str) => {
  let words = str.split(" ")
  let longestWord = ""

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }
  return longestWord
}
// console.log(findLongestWord3("join me together withallus"))

function mathSequances(arr) {
  let arith = []
  let geo = []
  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1]
    arith.push(number1)
    let number2 = arr[i] / arr[i - 1]
    geo.push(number2)
  }
  console.log(`A : ${arith}`)
  console.log(`G : ${geo}`)
  // return arr
}
// console.log(mathSequances([2, 4, 6, 8]))
// console.log(mathSequances([3, 9, 27]))
// console.log(mathSequances([2, 5, 14, 89]))
// console.log(countoccurrences(array))

const extensionOfFileName = (str) => {
  return str.slice(str.lastIndexOf("."))
}
// console.log(extensionOfFileName("webpack.config.js"))
const checkTwoNumber = (a, b) => {
  if (a === 100 || b === 100 || a + b === 100) {
    return true
  } else {
    return false
  }
}
// console.log(checkTwoNumber(50, 50))

const moveCharsForward = (str) => {
  return str
    .split("")

    .map((char) => {
      if (char === "z" && char.includes("z")) return (char = "a")
      return String.fromCharCode(char.charCodeAt(0) + 1)
    })
    .join("")
}
// console.log(moveCharsForward("abcdefghijklmnopqrstuvwxy"))

function getDateFormat() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day} /${month}/ ${year}`
}
console.log(getDateFormat())

function thatReturnsStringWithNew(str) {
  return str.indexOf("New!") === 0 ? str : `New! ${str}`
}
console.log(thatReturnsStringWithNew("New! string"))

const makeNewString = (str) => (str.length < 3 ? str : str.slice(0, 3) + str.slice(-3))
console.log(makeNewString("abscdcdsf"))

const extractTheFirstHalf = (str) => {
  let word = ""
  for (let i = 0; i < str.length / 2; i++) {
    word += str[i]
    // console.log(word)
  }
}
// extractTheFirstHalf("12345678")

const concatenate = (str1, str2) => {
  return str1.slice(1) + str2.slice(1)
}

// console.log(concatenate("123", "456"))

const findNumberClosestTo100 = (a, b) => {
  return 100 - a < 100 - b ? a : b
}
// console.log(findNumberClosestTo100(78, 88))

const countChars = (str, char) => {
  return str.split("").filter((ch) => ch === char).length
}
const contains2To4 = (str, char) => {
  return countChars(str, char) >= 2 && countChars(str, char) <= 4
}
// console.log(contains2To4("oh!", "o"))
// console.log(contains2To4("ooh!", "o"))
// console.log(contains2To4("ooooooh!", "o"))
// console.log(contains2To4("ooh!", "o"))
// console.log(contains2To4("ooh!", "o"))

const findTheEvenNumber = (arr) => {
  let num = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      num++
    }
  }
  return num
}
function findTheEvenNumber2(arr) {
  return arr.filter((num) => num % 2 === 0).length
}

// console.log(findTheEvenNumber([2, 2, 2, 4, 4, 4, 1, 1, 1, 1, 1]))
// console.log(findTheEvenNumber2([2, 2,6,6, 2, 4, 4, 4, 1, 1, 1, 1, 1]))
const createArrayofNumbers = (num) => {
  const arrayOfnumber = []
  for (let i = 1; i <= num; i++) {
    arrayOfnumber.push(i)
  }
  return arrayOfnumber
}
// console.log(findTheEvenNumber(createArrayofNumbers(6)))
// console.log(findTheEvenNumber(createArrayofNumbers(9)))

function mathSequances(arr) {
  let arith = new Set()
  let geo = new Set()
  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1]
    arith.add(number1)
    let number2 = arr[i] / arr[i - 1]
    geo.add(number2)
  }
  if (arith.size == 1) {
    return `arithmic: ${arith} `
  }
  if (geo.size == 1) return `geometric ${geo}`
  return -1
}

console.log(mathSequances([2, 4, 6, 8]))
console.log(mathSequances([3, 9, 27]))
console.log(mathSequances([2, 5, 14, 89]))

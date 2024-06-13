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

console.log(biggestwrwrw(sentence))
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

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // 6
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

const array = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3]

function countoccurrences(str) {
  let count = {}
  let maxlength = 0
  let key = ''
  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (count[char]) {
      count[char]++
    } else {
      count[char] = 1
    }
    if (count[char] > maxlength) {
      maxlength = count[char]
      key=char
    }
  }
  return { count, maxlength ,key}
}
console.log(countoccurrences(array))

function palindrome(str) {
  let j = str.length - 1
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[j]) {
      return false
    }
    j--
  }
  return true
}
let str1 = "racecar"
let str2 = "hello"
let str3 = "nitin"

function reverseString(str) {
  return str.split("").reverse().join("")
}
// console.log(reverseString("hello"))
// console.log(palindrome("nitin"))
function factorialize(num) {
  if (num < 0) return -1
  else if (num == 0) return 1
  if (num) {
    return num * factorialize(num - 1)
  }
}
console.log(factorialize(12))

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
console.log(recursion(5))
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
    }else{console.log(i)}
  }
}
fizzfuzz()

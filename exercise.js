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
  let word = 0
str.split(' ')
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // 6

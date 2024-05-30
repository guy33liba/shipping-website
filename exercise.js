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
console.log(reverseString("hello"))
function factorialize(num) {
  // Your code here
}

console.log(factorialize(5)) // 120
console.log(factorialize(10)) // 3628800

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


function reverse(str) {
  let rev = ""
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i]
    if (rev == str) {
      return true
    } else {
      return false
    }
  }
}
console.log(reverse(str3))

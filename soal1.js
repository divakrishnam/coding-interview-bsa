// cara pertama

function palindrome(input) {
  for (let i = 0; i < Math.floor(input.length / 2); i++) {
    if (input[i] !== input[input.length - i - 1]) {
      return false
    }
  }
  return true
}

// cara kedua

function palindrome2(input) {
  const len = input.length
  if (len === 1 || len === 0) return true
  if (input[0] !== input[len - 1]) return false
  return palindrome2(input.substr(1, len - 2))
}


console.log(palindrome2('katak'))
console.log(palindrome2('basi'))
console.log(palindrome('isi'))
// console.log(palindrome('kodok'))
// console.log(palindrome('kecap'))
console.log(palindrome('katak basi'))
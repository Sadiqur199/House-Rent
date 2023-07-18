function isPalindrome(str) {
  const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("this is a man!"));


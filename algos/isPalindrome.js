/* 

url: https://leetcode.com/problems/valid-palindrome/

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. 


Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

function isPalindrome(str) {
  // remove special characters
  str = str
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

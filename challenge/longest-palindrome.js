// given a string return the longest palindrome
// or, the longest sequence that is the same forwards and backwards 

// "My dad is a racecar athlete" -> "a racecar a"


// longest keeps the current longest palindrome
let longest = [];
function run (string, mid) {

  // variables
  // mid is where the middle out search will start
  // also arrays are a little easier to work...
  let array = string.split('');
  let left = mid - 1;
  let right = mid + 1;
  // flip and count are for keeping the while loop on track
  let flip = true;
  let count = 1;

  while(flip) {
    // check to see if we found a palindrome
    let str = array.slice(left, right);
    let rev = array.slice(left, right).reverse();
    if(str.join('') === rev.join('') && str.length > longest.length) {
      longest = str;
    }

    // if we cant spread any further stop the loop
    if(left === 0 && right === string.length) {
      flip = false;
    } 

    // if count is even left - 1
    // else right + 1
    // even / odd will just alternate...
    if(count % 2 === 0) {
      if(left - 1 >= 0) left--;
      // if its even but we cant go left any more
      else right++;
    }
    else {
      if (right + 1 <= string.length) right++;
      // if its odd but we cant go right any more
      else left--;
    }
    count++;
  }
  return;
}

function longestPalindrome (string) {
  longest = [];
  for(let i = 1; i < string.length - 1; i++) run(string, i);
  return longest.join('');
}




const test1 = "My dad is a racecar athlete";
const test2 = "aibohphobia";

console.log(longestPalindrome(test1));
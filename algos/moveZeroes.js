// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

function moveZeroes(arr) {
  // set up pointers
  let left = 0;
  let right = left + 1;

  // while loop
  while (right < arr.length) {
    // if 0 is on left, swap
    if ((arr[left] === 0) & (arr[right] !== 0)) {
      let temp = arr[left];

      arr[left] = arr[right];
      arr[right] = temp;
      left++;
    }

    // if left isn't 0, increment it
    if (arr[left] !== 0) {
      left++;
    }

    // always move j up
    right++;
  }

  return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

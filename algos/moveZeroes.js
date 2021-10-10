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
  let i = 0;
  let j = i + 1;

  // while loop
  while (j < arr.length) {
    // if 0 is on left, swap
    if ((arr[i] === 0) & (arr[j] !== 0)) {
      let temp = arr[i];

      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }

    // if left isn't 0, increment it
    if (arr[i] !== 0) {
      i++;
    }

    // always move j up
    j++;
  }

  return arr;
}

moveZeroes([0, 1, 0, 3, 12]);

//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_] // [0,1,2,3,4]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDuplicates(arr) {
  // create pointers, left 0 right 1
  let left = 0;
  let right = 1;
  // count uniques
  let counter = 0;

  // if left NOT equal to right, increase left pointer
  // change left value to right value
  // add to counter

  //  L R
  // [1,2,2,3,4,4]

  //    LR
  // [1,2,2,3,4,4]

  while (right < arr.length) {
    // if it's unique
    if (arr[left] !== arr[right]) {
      // move left up
      left++;
      arr[left] = arr[right];
      counter++;
    }
    // if they are equal, increase right pointer
    right++;
  }

  return arr.slice(0, counter + 1);
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

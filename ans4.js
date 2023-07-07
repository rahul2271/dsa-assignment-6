function findMaxLength(nums) {
    const map = new Map();
    let maxLength = 0;
    let count = 0;
  
    // Initialize the map with a sum of 0 at index -1
    map.set(0, -1);
  
    for (let i = 0; i < nums.length; i++) {
      // Increment count for 1 and decrement for 0
      count += nums[i] === 1 ? 1 : -1;
  
      if (map.has(count)) {
        // If the count is already in the map, update maxLength
        maxLength = Math.max(maxLength, i - map.get(count));
      } else {
        // Otherwise, store the count with its index
        map.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const nums = [0, 1, 0, 1, 1, 1, 0];
  const maxLength = findMaxLength(nums);
  console.log(maxLength); // Output: 6
  
function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;
  
    // Step 1: Find the peak
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // Step 2: Check if i is a valid peak
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    // Step 3: Check the descending part
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    // Step 4: Check if we reached the end of the array
    return i === n - 1;
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  const isValidMountain = validMountainArray(arr);
  console.log(isValidMountain); // Output: true
  
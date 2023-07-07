function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const frequency = new Map();
  
    // Count the frequency of elements in the changed array
    for (const num of changed) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    // Sort the changed array in ascending order
    changed.sort((a, b) => a - b);
  
    const original = [];
  
    // Iterate through the changed array
    for (const num of changed) {
      if (frequency.get(num) === 0) {
        // Skip if the current number has been used already
        continue;
      }
  
      const doubled = num * 2;
  
      if (!frequency.has(doubled) || frequency.get(doubled) === 0) {
        // If the doubled value is not present or has been used already, return empty array
        return [];
      }
  
      // Add the original number to the result array
      original.push(num);
  
      // Update the frequency count
      frequency.set(num, frequency.get(num) - 1);
      frequency.set(doubled, frequency.get(doubled) - 1);
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 2, 2, 4];
  const originalArray = findOriginalArray(changed);
  console.log(originalArray); // Output: [1, 2]
  
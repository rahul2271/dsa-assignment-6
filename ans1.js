function reconstructPermutation(s) {
    const perm = [];
    let low = 0;
    let high = s.length;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'I') {
        perm[i] = low;
        low++;
      } else {
        perm[i] = high;
        high--;
      }
    }
  
    perm[s.length] = low; // or perm[s.length] = high
  
    return perm;
  }
  
  // Example usage:
  const s = "IDID";
  const reconstructedPermutation = reconstructPermutation(s);
  console.log(reconstructedPermutation); // Output: [0, 4, 1, 3, 2]
  
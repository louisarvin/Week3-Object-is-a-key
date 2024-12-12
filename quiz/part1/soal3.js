function cariMedian(arr) {
    // you can only write your code here!
    let panjang = arr.length;
    let total = 0;
    let median = 0;
    for (let i = 0; i < panjang; i++) {
      total += arr[i];
    }
    median = total / panjang;
    if (panjang % 2 === 0) {
      median = (arr[panjang / 2 - 1] + arr[panjang / 2]) / 2;
    } 
    return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5

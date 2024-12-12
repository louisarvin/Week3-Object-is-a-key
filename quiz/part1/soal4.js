/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    // Buat objek untuk menyimpan frekuensi kemunculan angka
    let frequency = {};
  
    // Hitung frekuensi kemunculan setiap angka
    for (let num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    // Cari angka dengan frekuensi tertinggi
    let maxFrequency = 0;
    let modus = -1;
    let uniqueValues = Object.keys(frequency).length;
  
    for (let num in frequency) {
      if (frequency[num] > maxFrequency) {
        maxFrequency = frequency[num];
        modus = Number(num);
      }
    }
  
    // Jika semua angka muncul sama banyak atau hanya ada satu angka unik, return -1
    if (maxFrequency === 1 || uniqueValues === 1) {
      return -1;
    }
  
    return modus;
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

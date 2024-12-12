# Logic Challenge tanpa tipe data object | Part 1

Sabar jangan langsung ke object dulu, kalian harus asah logic lagi wkwk

## Soal 1
```js
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!
    for (let i = 2; i < angka; i++) {
      if (angka % i === 0) {
        return false;
      }
    }
    return true;
  }

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
```
## Soal 2
```js
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let faktor1 = [];
  let faktor2 = [];
  for (let i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) {
      faktor1.push(i);
    }
  }
  for (let j = 1; j <= angka2; j++) {
    if (angka2 % j === 0) {
      faktor2.push(j);
    }
  }
  let fpbTerbesar = 1;
  for (let i = 0; i < faktor1.length; i++) {
    for (let j = 0; j < faktor2.length; j++) {
      if (faktor1[i] === faktor2[j]) {
        fpbTerbesar = faktor1[i];
      }
    }
  }
  return fpbTerbesar;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
```
## Soal 3
```js
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
```

## Soal 4
```js
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
```
## Soal 5
```js
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let result = ''; // variabel untuk menampung hasil
    for (let i = 0; i < kata.length; i++) { // looping untuk mengubah huruf
      let char = kata[i]; // variabel untuk menyimpan huruf
      if (char === 'z') { // jika huruf adalah z
        char = 'a'; // ubah huruf menjadi a
      } else {
          char = String.fromCharCode(char.charCodeAt(0) + 1); // ubah huruf menjadi huruf setelahnya
      }
      result += char; // tambahkan huruf ke variabel result
    }
    return result; // kembalikan variabel result
  }

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
```

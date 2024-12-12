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

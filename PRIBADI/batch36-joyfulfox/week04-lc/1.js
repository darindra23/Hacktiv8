/*
==========================
Gundala Membasmi Kejahatan
==========================
Instruksi
=========
Gundala sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar Gundala tidak dapat menangkap mereka.
Gundala memiliki 3 "nyawa", jika Gundala terkena jebakan maka "nyawa" dari gundala ini akan berkurang.
Keterangan
 - '*' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '#' adalah jalanan biasa
 - 'Begundal' adalah pelaku kejahatan
 Jika nyawa Gundala habis, pertarungan pun akan berakhir. Dan mengembalikan jumlah begundal yang 
 berhasil ditangkap sebelum Gundala gugur.
 [RULES]
  - WAJIB menggunakan PSEUDOCODE
  - DILARANG menggunakan built-in function lain
 */

 /*
================================================================================================================================
PSEUDOCODE:
-----------
START
STORE COUNTER with 0 value
STORE NYAWA with 3 value
DO LOOP until gundala length
IF NYAWA reach 0 AND counter equal to 0
RETURN Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.
IF NYAWA reach 0 AND counter bigger to 0
RETURN Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap COUNTER begundal.
IF GUNDALA[i] equal to '*'
MINUS NYAWA with 1
IF GUNDALA[i] equal to 'Begundal'
ADD COUNTER with 1
LOOPS END AND NYAWA bigger than 0
RETURN Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap COUNTER begundal.
END
===============================================================================================================================
*/

function basmiKejahatan(gundala) {
    var counter = 0
    var nyawa = 3

    for(i = 0; i < gundala.length; i++){
      if(nyawa === 0 && counter === 0){
        return `Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.`
      } else if(nyawa === 0 && counter > 0){
        return `Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap ${counter} begundal.`
      } else if(gundala[i] === '*'){
        nyawa --
      } else if(gundala[i] === 'Begundal'){
        counter ++
      }
    }
  return `Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap ${counter} begundal.`
}
  
  console.log(basmiKejahatan(['*', '*', '#', '#', 'Begundal', '#', 'Begundal', 'Begundal', '#']));
  // Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap 3 begundal.
  
  console.log(basmiKejahatan(['*', '*', 'Begundal', '*', '*', '#', 'Begundal']));
  // Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap 1 begundal.
  
  console.log(basmiKejahatan(['*', '*', '*', '*', '#', 'Begundal', '*', 'Begundal', '#', 'Begundal']));
  // Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.

  


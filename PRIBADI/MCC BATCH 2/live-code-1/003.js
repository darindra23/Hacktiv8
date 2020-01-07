/*

Instruksi
----------
Diberikan sebuah variabel `kata` yang bertipe string. Nilai/value dari `kata`
merupakan sembarang gabungan semua karakter.

Buatlah program yang mengecek karakter angka dan mengecek apakah angka tersebut adalah
ganjil atau genap. Dan menjumlahkan dua kelompok angka tersebut secara terpisah.

Program akan menampilkan keterangan penjumlahan siapa yang lebih kecil (genap atau ganjil).
Jika hasil penjumlahan sama antara kelompok tersebut maka tampilkan "Seimbang"

Contoh 1:
let kata = 'ab1327^@4qb'

output yang diharapkan "Genap dengan hasil penjumlahan 6"

Contoh 2:
let kata = 't4k13978$82'

output yang diharapkan "Ganjil dengan hasil penjumlahan 20"

Contoh 3:
let kata = = '8t4k1397$8'

output yang diharapkan "Seimbang"
*/

//write your code here
let kata = 'ab1327^@4qb'
// let kata = 't4k13978$82'
var genap = 0;
var ganjil = 0;
for (i = 0; i < kata.length; i++) {
    if(kata[i] % 2 == 0){
        genap += kata[i]/1
    } else if(kata[i] % 2 == 1){
        ganjil += kata[i]/1
    }
}
if(genap < ganjil){
    console.log(`Genap dengan hasil penjumlahan ${genap}`);
} else if(ganjil == genap){
    console.log('SEIMBANG!');
}else{
    console.log(`Ganjil dengan hasil penjumlahan ${ganjil}`);
}
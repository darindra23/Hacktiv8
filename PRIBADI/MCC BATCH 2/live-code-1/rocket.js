/*

Instruksi
----------
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
- isi dari tangga adalah angka 1 yang ditambahkan secara terus menerus
- Jika digit angka lebih dari 1 maka yang diambil adalah angka terakhir

contoh 1 (height = 3):

123
45
6

contoh 2 (height = 5):

12345
6789
012
34
5

contoh 3 (height = 7):

1234567
890123
45678
9012
345
67
8

tinggi tangga sesuai dengan nilai variable height
Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var height = 7 // isi dengan nilai tinggi tangga!
var hasil = 0
var display = ''

for (i = 0; i <= height; i++) {
    for (j = height; j > i; j--) {
        hasil++
        if(hasil > 9){
            display += hasil % 10
        }else{
            display += hasil
        }
    }
    display += '\n'
}
console.log(display);
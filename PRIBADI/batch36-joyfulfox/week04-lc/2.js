/*
=============
Reverse Array
=============
Function reverseAll() mengambil input berupa sebuah array, dan mengembalikan kebalikan dari isi array tersebut
beserta kebalikan dari angka-angka di dalamnya.
CONTOH:
input : [123, 456]
PROSES:
1. 456 dibalik jadi 654
2. 123 dibalik jadi 321
3. 654 akan berada di indenumber 0 array dan 321 akan berada di indenumber 1 array
output: [654, 321]
catatan: output merupakan array of numbers, bukan array of string
DILARANG MENGGUNAKAN:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

function reverseAll(arr) {
  //write your code here
  var display = []
  for(i = arr.length-1; i >= 0; i--){
    	var nomor = arr[i]
      var reversed = 0
      while( nomor > 0){
        var kanan = Math.floor(nomor % 10);
        reversed = reversed * 10 + kanan;
        nomor = Math.floor(nomor/10)
      }
    display.push(reversed)
  }
  return display
}
  console.log(reverseAll([123, 521, 456])) //[654,125,321]
  console.log(reverseAll([897])) //[798]
  console.log(reverseAll([])) //[]
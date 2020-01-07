/**
 * =============
 * Mencari Jarak
 * =============
 * 
 * [Description]
 * Diberikan sebuah array 2-dimensi yang berisikan 2 asterisk (*) dan sisanya adalah spasi (' ')
 * 
 * [Instruction]
 * Buatlah sebuah fungsi untuk menentukan jarak dari kedua asterisk tersebut.
 * 
 * [Example]
 * [
 *   [' ',' ','*',' '],
 *   [' ',' ',' ',' '],
 *   [' ',' ',' ',' '],
 *   ['*',' ',' ',' ']
 * ]
 * 
 * step by step solving :
 * [
 *   [' ', ' ', '0', ' '],
 *   [' ', ' ', '1', ' '],
 *   [' ', ' ', '2', ' '],
 *   ['5', '4', '3', ' ']
 * ]
 * jika kita perhatikan urutan angka - angka diatas, maka jarak antara
 * kedua x adalah 5. Dimana posisi * tujuan dihitung sebagai 1 langkah.
 * 
 * maka output : 5
 * 
 * [Rules]
 * 1. `Dilarang menggunakan built-in function apapun` kecuali push.
 */


function findDelta(arr) {
   var kordinat = []
   for (i= 0;i<arr.length;i++) {
     for (j= 0;j<arr.length;j++) {
       if(arr[i][j] === '*'){
         kordinat.push([i,j])
       }
     }
   }
   if(kordinat.length > 1){
  var display = ((kordinat[1][0]-kordinat[0][0]) + (Math.abs(kordinat[1][1]-kordinat[0][1])))
  return display
   } else{
     return 'Jarak tidak ditemukan.'
   }
}  
  
  var arr1 = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
  ]
  console.log(findDelta(arr1)) // 3
  
  var arr2 = [
    [' ', ' ', ' ', ' ', '*'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
  ]
  console.log(findDelta(arr2)) // 5
  
  var arr3 = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
  ]
  console.log(findDelta(arr3)) // Jarak tidak ditemukan
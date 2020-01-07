/*
      Buatlah sebuah tabel perkalian dengan parameter input angka
      Angka tersebut akan menentukan jumlah baris dan jumlah kolom dari table yang akan dibuat.
      Dimana jumlah baris dan jumlah kolom sama
      dan isi dari cell adalah hasil perkalian dari baris * kolom
      Contoh:
      multiplication_table(3) akan membentuk:
      [     1  2  3
        1  [1, 2, 3]
        2  [2, 4, 6]
        3  [3, 6, 9]
      ]
      multiplication_table(4) akan membentuk:
      [       1  2   3   4
         1  [ 1, 2,  3,  4 ]
         2  [ 2, 4,  6,  8 ]
         3  [ 3, 9,  9, 12 ]
         4  [ 4, 8, 12, 16 ]
      ]
*/
function multiplication_table(square) {
  var arr = []
  for (i = 1; i <= square; i++) {
    var tmp = []
    for (j = 1; j <= square; j++) {
      tmp.push(j*i)
    }
    arr.push(tmp)
  }
  if(typeof square != 'number'){
    return 'Failed to create multiplication table'
  } 
  return arr
}

let table3 = multiplication_table(3);
console.log(table3);
// [ [1, 2, 3], [2, 4, 6], [3, 6, 9] ]

let table4 = multiplication_table(4);
console.log(table4);
// [ [ 1, 2, 3, 4 ],
//   [ 2, 4, 6, 8 ],
//   [ 3, 6, 9, 12 ],
//   [ 4, 8, 12, 16 ] ]

let table5 = multiplication_table(5);
console.log(table5);
// [ [ 1,  2,  3,  4,  5 ],
//   [ 2,  4,  6,  8, 10 ],
//   [ 3,  6,  9, 12, 15 ],
//   [ 4,  8, 12, 16, 20 ],
//   [ 5, 10, 15, 20, 25 ] ]

let tableNaN = multiplication_table('2');
console.log(tableNaN);
// 'Failed to create multiplication table'

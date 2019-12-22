/*
------------
LOST NUMBERS
------------
PROBLEM
=======
	lostNumbers adalah sebuah function yang akan menerima tiga parameter.
	Tiga parameter tersebut adalah tiga angka yang berbeda.
	Function akan mengembalikan setiap angka diantara angka pada tiga parameter tersebut, dari nilai parameter terkecil ke parameter terbesar
	kecuali angka yang di input pada parameter
Contoh:
	first = 6, second = 1, third = 3
	terbesar adalah 6, terkecil adalah 1,
	maka function mengembalikan urutan angka secara berurutan seperti:
	2, 4, 5

Jika tidak ada angka yang ditampilkan, maka output "Tidak ada angka sama sekali".

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

//Pseudocode
/**
 * SORT lostNumbers from MIN to MAX
 * STORE output with empty value
 * STORE i with the smallest number
 * 
 * WHILE i < BIGGEST NUMBER
 * IF i != MIDDLE
 * PUSH(i) to the output
 * ADD i + 1
 *
 * IF OUTPUT LENGTH equal to 0
 * RETURN 'Tidak ada angka sama sekali'
 * ELSE RETURN output
 */

function lostNumbers(first, second, third) {
	var nomor = [first,second,third]
	var kecil = 0;
	var tengah = 0;
	var besar = 0;
	var output = [];
	
	// CARI TERBESAR
	if(first > second && first > third){
		besar = first
	} else if( second > third && second > first){
		besar = second
	} else {
		besar = third
	}
	
	// CARI TERKECIL
	if( first < second && first < third){
		kecil = first
	} else if( second < third && second < first){
		kecil = second
	}  else {
		kecil = third
	}

	// CARI TENGAH
	for(i = 0; i < nomor.length;i++){
		if(nomor[i] != kecil && nomor[i] != besar){
			tengah = nomor[i]
		}
	}
	
	// CARI NOMOR HILANG
	for(i = kecil +1; i < besar; i++){
		if( i != tengah){
		 output.push(i)
		}
	}
	if(output.length === 0){
		return 'Tidak ada angka sama sekali';
	} else{
		return output;
	}
}

console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// Tidak ada angka sama sekali

/**
=======
VOTES
=======

Diberikan sebuah function hitungVotes yang menerima sebuah parameter bertipe array multidimensi.

Function ini akan mengembalikan sebuah object dimana object tersebut menampilkan
data totalVote dan siapa saja yang melakukan vote terhadap kandidat tersebut

Untuk contoh silakan melihat DRIVER CODE / TEST CASES

RULES:
------
- DILARANG MENGGUNAKAN built-in-function .split()
**/

function hitungVotes(data) {
  // your code here
}

/* DRIVER CODE / TEST CASE */

console.log(hitungVotes([
  ['Ricky', '10 Desember 2019', 'Hansin;Fiqri;July;Desi'],
  ['Sofyan', '10 Desember 2019', 'Heri;Ulfa,Annisa;Puji;Fakhran'],
  ['Sofyan', '11 Desember 2019', ''],
  ['Ricky', '11 Desember 2019', 'Asrawi;Rahmandi'],
]));

// {
//   Ricky: {
//     totalVote: 6,
//     voters: ['Hansin', 'Fiqri', 'July', 'Desy', 'Asrawi', 'Rahmandi']
//   },
//   Sofyan: {
//     totalVote: 5,
//     voters: ['Heri', 'Ulfa', 'Annisa']
//   }
// }

console.log(hitungVotes([])); // "Tidak ada data yang bisa diproses"
console.log(hitungVotes()); //Invalid data

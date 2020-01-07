/*
Professor X ingin membuat suatu function computeGrade untuk menghitung nilai huruf dari mahasiswa nya untuk mata kuliah yang dia ajarkan. 
Bantulah Prof. X untuk mengimplementasikan function tersebut!
Function computeGrade() menerima suatu input berupa perolehan nilai akhir dari seorang mahasiswa di kelas Prof. X.
Fungsi ini akan mengeluarkan output berupa String nilai huruf dari nilai mahasiswa tersebut. 
Nilai huruf tersebut dihitung berdasarkan range dari nilai mahasiswa tersebut, dengan aturan sebagai berikut:
1. Nilai 'A' : 85-100
2. Nilai 'A-': 80-84
2. Nilai 'B+': 75-79
3. Nilai 'B' : 70-74
4. Nilai 'B-': 65-69
5. Nilai 'C+': 60-64
6. Nilai 'C' : 55-59
7. Nilai 'Tidak Lulus': <55
*/

function computeGrade(nilai) {
   if(nilai <= 100 && nilai >= 85){
       return 'A'
   } else if(nilai <= 84 && nilai >= 80){
       return 'A-'
   } else if(nilai <= 79 && nilai >= 75){
       return 'B+'
   } else if(nilai <= 74 && nilai >= 70){
       return 'B'
   } else if(nilai <= 69 && nilai >= 65){
       return 'B-'
   } else if(nilai <= 64 && nilai >= 60){
       return 'C+'
   } else if(nilai <= 59 && nilai >= 55){
       return 'C'
   } else{
       return 'Tidak Lulus'
   }
} 
  
  console.log(computeGrade(56)); //C
  console.log(computeGrade(49)); //Tidak Lulus
  console.log(computeGrade(74)); //B
  console.log(computeGrade(80)); //A-
  console.log(computeGrade(79)); //B+
  console.log(computeGrade(55)); //C
  console.log(computeGrade(73)); //B
  console.log(computeGrade(89)); //A
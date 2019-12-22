/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(number){
  
  var display = []
  
  for(i = 0; i < number.length; i++){
  var nomor = number[i]
  var reversed = 0
    while( nomor > 0){
      var kanan = Math.floor(nomor % 10);
      reversed = reversed * 10 + kanan;
      nomor = Math.floor(nomor/10)
    }
    if(reversed != number[i]){
      do{
        number[i] ++
        var nomor = number[i]
        var reversed = 0
          while( nomor > 0){
            var kanan = Math.floor(nomor % 10);
            reversed = reversed * 10 + kanan;
            nomor = Math.floor(nomor/10)}

      } while ( reversed != number[i])
      display.push(reversed)
    } 
    else {
      display.push(number[i])
    }
  }
  return display
}

console.log(palindromeChanger([117,9,20,30,42]))
// [ 121, 9, 22, 33, 44 ]


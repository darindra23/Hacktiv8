function angkaPalindrome(num) {
    // you can only write your code here!
    do{
        num ++
        var nomor = num
        var reversed = 0
        while( nomor > 0){
            var kanan = Math.floor(nomor % 10);
            reversed = reversed * 10 + kanan;
            nomor = Math.floor(nomor/10)
        }
    } while ( reversed != num)
   return num
}
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
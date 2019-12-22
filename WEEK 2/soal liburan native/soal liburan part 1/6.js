/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
*/

/*
PSEUDOCODE
STORE STRING to lowercase
STORE COUNTER with 0 value
DO LOOPS to check if 3 string EQUAL to partial
IF 3 string equal to partial add +1 to counter
RETURN COUNTER
*/

function partialCheck(str, partial) {
  var string = str.toLowerCase()    
  var counter = 0;

  for(i = 0; i < str.length; i++){
    if(string[i]+string[i+1]+string[i+2] === partial){
        counter ++
      }
  }
  if(counter > 0){
    return `Found ${counter} times.`
  } else {
    return `Not found`
  }
}

console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 times
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found
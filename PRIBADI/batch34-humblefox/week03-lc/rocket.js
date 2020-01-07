/*
  //////////////////////
  pyramidNumberExtension
  //////////////////////

  Function pyramidNumberExtension adalah suatu fungsi kelanjutan dari pyramidNumber yang sudah dibuat.
  Function ini akan menerima parameter max yang bertipe data number, serta hanya berfungsi untuk menampilkan
  saja.

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    55555
    4444
    333
    22
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
    3. Nilai rocket hanya ada 0 atau 100, jadi diutamakan mengerjakkan soal yang lain terlebih dahulu.
*/

function pyramidNumberExtension (max) {
  var value = ''
    // LOOP 1
    for(i = max; i > 0; i--){
      value += i
      for(j = i; j > 1; j--){
        value += i
      }
      value += '\n'
    }
    // LOOP 2
    for(i = 2; i <= max; i++){
      value += i
      for(j = 1; j < i; j++){
        value += i
      }
    value+= '\n'
    }
  return value
}

console.log(pyramidNumberExtension(5))

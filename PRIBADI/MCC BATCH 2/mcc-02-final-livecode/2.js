/**
 * =========
 * Singkatan
 * =========
 * 
 * Description
 * -----------
 * singkatan adalah sebuah function yang menerima 2 parameter, yaitu: @nama dan @pilihan
 * 
 * @nama merupakan sebuah string berisikan nama user yang terdiri dari 2 kata
 * jika @nama tidak terdiri dari 2 kata, maka akan me-return 'Nama Invalid'
 * 
 * @pilihan merupakan sebuah string berisikan salah satu kata berikut:
 * - depan -> maka nama belakangnya disingkat sehingga hanya nama depan saja yang terlihat
 *   contoh: Jetly Sandita -> Jetly S.
 * 
 * - belakang -> maka nama depannya disingkat sehingga hanya nama belakang saja yang terlihat
 *   contoh: Muhammad Anova -> M. Anova
 * 
 * - lengkap -> maka namanya tidak disingkat
 *   contoh: Kevin Tan -> Kevin Tan
 * 
 * Selain 3 kata tersebut, maka function akan me-return 'Pilihan Invalid'
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function:
 *    split, slice, splice, join, reverse, substring, substr, indexOf, lastIndexOf,
 *    includes, some, every, find
 * 2. Dilarang menggunakan regex
 */

function singkatan(nama, pilihan) {
  var display = ''
  var check = false
  
  //CHECK LENGKAP
  if(pilihan === 'lengkap'){
    return nama
  }
  // LOOP
  for (i = 0; i < nama.length; i++) {
    display += nama[i]
    if(nama[i] === ' ' && pilihan === 'depan'){
      display += `${nama[i+1]}.`
      check = true
      break;
    } else if(nama[i] === ' ' && pilihan === 'belakang'){
      display = ''
      display += `${nama[0]}.`
      check = true
    } 
  }
  // OUTPUT
  if(nama == true || pilihan == false){
    return 'Pilihan Invalid'
  } else if(check == false) {
    return 'Nama Invalid'
  } else {
    return display
  }
}

console.log(singkatan('Adiel Pratama', 'depan')); // Adiel P.
console.log(singkatan('Muhammad Yusuf', 'belakang')); // M. Yusuf
console.log(singkatan('Adiel Pratama', '')); // Pilihan Invalid
console.log(singkatan('Rubhi Aulia', 'depan')); // Rubhi A.
console.log(singkatan('Ryan Akbar', 'lengkap')); // Ryan Akbar
console.log(singkatan('Armedi', 'depan')); // Nama Invalid
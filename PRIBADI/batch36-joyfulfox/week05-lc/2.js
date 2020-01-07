/**
 * ===================
 * Proxytia BUT Object
 * ===================
 * 
 * [DESCRIPTION]
 * Masih ingat dengan proxitia? Kali ini buatlah sebuah function yang mengecek apakah karakter yang kamu buat
 * sudah valid untuk bermain di proxytia.
 * 
 * [INSTRUCTIONS]
 * 1. fungsi menerima 3 parameter: `name, role, weapon`
 * 2. fungsi akan mengecek apakah role dan senjata yang digunakan sudah valid atau belum
 * 
 * [RULES]
 * 1. `Dilarang menggunakan built-in functions`
 * 2. Asumsi semua parameter selalu terisi
 */


function proxytiaObject(name, role, weapon) {
    //write your code here
}

  console.log(proxytiaObject('Ucup', 'ksatria', 'tombak')+'\n')
  // Selamat datang di Proxytia ksatria Ucup, gunakan tombakmu untuk bermain.
  console.log(proxytiaObject('Icha', 'penyihir', 'pedang')+'\n')
  // Senjata invalid.

  console.log(proxytiaObject('Armedi', 'Programmer', 'tongkat')+'\n')
  // Role invalid

  console.log(proxytiaObject('Stef', 'penyihir', 'tongkat')+'\n')
  // Selamat datang di Proxytia penyihir Stef, gunakan tongkatmu untuk bermain.
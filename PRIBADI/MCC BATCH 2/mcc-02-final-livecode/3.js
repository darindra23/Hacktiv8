/*
===============
Boot Pair Count
===============
Jack sedang merapikan gudang di toko Boot-nya, dia memiliki banyak tumpukan boot-boot
yang warnanya harus dipasangkan agar dapat dijual.

Bila array yang berisi angka-angka masing-masing mewakili suatu warna, tentukanlah
ada berapa banyak pasang boot yang siap dijual oleh Jack!

[EXAMPLE]
Bila input array adalah [12, 14, 12, 12, 18, 14, 14, 12] maka:
hasilnya adalah 3, karena ada dua pasang 12 dan satu pasang 14.
- Bila tidak ada pasangan sama sekali, maka hasilnya adalah:
"Tidak ada pasangan sepatu boot ditemukan"
- Bila tidak ada boot sama sekali, maka hasilnya adalah:
"Tidak ada sepatu boot mohon cek kembali input anda"

[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
2. dilarang menggunakan regex
*/


function bootPairCount(arr) {
  arr.sort()
  var display = []
  var tmp = []
  // PUSH ARRAY
  for (i = 0; i < arr.length; i++) {
    tmp.push(arr[i])
    if(arr[i] != arr[i+1]){
      display.push(tmp)
      tmp = []
    }
  }
  // COUNTER
  var counter = 0
  for (i = 0; i < display.length; i++) {
      counter += Math.floor(display[i].length/2)
  }
  // DISPLAY
  if(arr == false){
    return 'Tidak ada sepatu boot mohon cek kembali input anda'
  } else if(counter === 0){
    return 'Tidak ada pasangan sepatu boot ditemukan'
  } else{
  return counter
  }
}

//TEST CASES
console.log(bootPairCount([10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3
console.log(bootPairCount([15, 23, 23, 30, 30, 10, 15, 10])) // 4
console.log(bootPairCount([1, 2, 3, 4, 5])) // Tidak ada pasangan sepatu boot ditemukan
console.log(bootPairCount([])) // Tidak ada sepatu boot mohon cek kembali input anda

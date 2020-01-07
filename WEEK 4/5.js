function ubahHuruf(kata) {
    var alfabet = 'abcdefghijklmnopqrstuvwxyza'
    var display = ''
    // LOOP
    for (i = 0; i < kata.length; i++) {
        for (j = 0; j < alfabet.length-1; j++) {
            if(kata[i] === alfabet[j]){
                display += alfabet[j+1]
            }
        }
    }
    return display
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascriptz')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
/*
  /////////////////
  americanGotTalent
  /////////////////
  Function americanGotTalent akan menentukan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];
  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.
  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];
  [PROCESS]
    tidak terdapat yang terbanyak.
  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function americanGotTalent (votes) {
 var sort = sorting(votes)
 var contestant = []
 var winner = []
 //LOOP
 for(i = 0; i < sort.length; i++){
   if(sort[i] !== sort[i+1]){
     contestant.push(sort[i])
    }
  }
  for(i = 0; i < contestant.length; i++){
    var counter = 0
    for(j = 0; j < sort.length; j++){
      if(contestant[i] === sort[j]){
        counter ++
      }
    }
    winner.push([counter,contestant[i]])
    counter = 0
  }
// DISPLAY
sorting(winner);
 if(winner[0][0] === winner[1][0]){
   return `Mohon maaf juara tidak bisa ditentukkan dalam minggu ini`
 } else{
   return `Selamat juaranya adalah ${winner[0][1]}, dengan total votes yang diterima ${winner[0][0]}.`
 }
}

// Create function to sort an array input
function sorting (arr) {
  var sort = arr
  for(i = 0; i < arr.length; i++){
    for(j = 0;j < arr.length; j++){
      if(sort[j] < sort[j+1]){
        var tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
  return sort
}



console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho' ]))
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']))
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']))
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2

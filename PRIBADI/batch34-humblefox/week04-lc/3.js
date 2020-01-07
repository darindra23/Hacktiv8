/*
  ////////////
  richestGroup
  ////////////
  Function richestGroup akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
    - kelompok yang ada HANYA terdiri dari A dan B. tapi tidak harus selalu ada.
  Function ini akan mengembalikkan nilai string.

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B'],
      ['A', 'A']
    ]
  [PROCESS]
  Pada array ['A', 'B'] tidak ada yang unggul.
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1
  [OUTPUT]
    Group A win...
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['A', 'A'],
      ['B']
    ]
  [PROCESS]
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1.
  Pada array ['B'] B unggul, maka nilai group B ditambah 1.

  [NOTES]
  Apabila ada yang seri atau tidak ada yang unggul maka tampilkan Tidak ada pemenangnya...
  [OUTPUT]
    Tidak ada pemenangnya...
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/

function richestGroup (groups) {
  var winner = []
  for(i = 0; i < groups.length; i++){
    for(j = 0; j < groups[i].length; j++){
      if(groups[i][j] === groups[i][j+1]){
        winner.push([groups[i][j]])
      } else if(groups[i].length < 2){
        winner.push(groups[i])
      }
    }
  }
  if(winner.length > 1){
    return `Tidak ada pemengangnya.`
  } else if(winner == false){
    return `Tidak ada pemengangnya.`
  } else{
    return `Group ${winner} win.`
  }
}

console.log(richestGroup([
  ['A', 'B'],
  ['A', 'A']
]))
// Group A win...

console.log(richestGroup([
  ['A', 'A'],
  ['B']
]))
// Tidak ada pemenangnya...

console.log(richestGroup([
  ['B']
]))
// Group B win...

console.log(richestGroup([]))
// Tidak ada pemenangnya...

/*
  ///////////////////
  richestGroupDynamic
  ///////////////////
  Function richestGroupDynamic akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
  Function ini akan mengembalikkan nilai string.

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B', 'C'],
      ['A', 'A', 'D', 'D', 'D']
    ]
  [PROCESS]
  Pada array ['A', 'B', 'C'] tidak ada yang unggul.
  Pada array ['A', 'A', 'D', 'D', 'D'] D unggul.
  [OUTPUT]
    [ 'D' ]
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['Z', 'Z'],
      ['B']
    ]
  [PROCESS]
  Pada array ['Z', 'Z'] Z unggul.
  Pada array ['B'] B unggul.
  [OUTPUT]
    [ 'Z', 'B' ]
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/

function richestGroupDynamic (groups) {
  var sort = sorting(groups)
  var winner = []
  for(i = 0; i < sort.length; i++){
    for(j = 0; j < sort[i].length; j++){
      if( sort[i].length > 2 && sort[i][j] === sort[i][j+1] && sort[i][j] === sort[i][j+2]){
        winner.push([sort[i][j]])
      } else if( sort[i].length <= 2 && sort[i][j] === sort[i][j+1]){
        winner.push([sort[i][j]])
      } else if(sort[i].length < 2){
        winner.push([sort[i][j]])
      }
    }
  }
  return winner
}

function sorting (arr) {
  var sort = arr
  for (let i = 0; i < sort.length; i++) {
    for (let j = 0; j < sort.length-1-i; j++) {
      if (sort[i][j] < sort[i][j+1]) {
        var temp = sort[j]
        sort[j] = sort[j+1]
        sort[j+1] = temp
      }
    }
  }
  return sort
}

console.log(richestGroupDynamic([
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D']
]))
// [ 'D' ]

console.log(richestGroupDynamic([
  ['A', 'A'],
  ['B']
]))
// [ 'A', 'B' ]

console.log(richestGroupDynamic([
  ['Z', 'Z'],
  ['B', 'X']
]))
// [ 'Z' ]

console.log(richestGroupDynamic([]))
// []

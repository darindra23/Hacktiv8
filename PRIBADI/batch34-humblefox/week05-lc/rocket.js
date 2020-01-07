/*
==========
rememberMe
==========
[INSTRUCTIONS]
rememberMe adalah sebuah fungsi yang akan menerima parameter dengan tipe data array
kemudian mengembalikan nilai string.

[EXAMPLE]
INPUT: ['re', 'em', 'b', 'erm', 'em']
PROCESS:
  're' diambil untuk melengkapi rememberme => memberme -> 're'
  'em' diambil untuk melengkapi memberme => mberme -> 'me'
  'b' diambil untuk melengkapi mberme => merme -> 'mber'
  'erm' diambil untuk melengkapi merme => me -> 'mer'
  'em' diambil untuk melengkapi me => true -> 'me'
OUTPUT: completed

INPUT: ['rembrm']
PROCESS:
  'rembr' diambil untuk melengkapi rememberme => ememe
OUTPUT: ememe

[RULES]
  1. hanya boleh menggunakan built in function .push(), .unshift()
  2. kata yang dicari adalah rememberme
*/

function rememberMe (lyrics) {
  //...
}

function splice (arr, start, remove, ...rest) {
  //...
}

function join (arr) {
//...
}

console.log(rememberMe(['re', 'em', 'b', 'erm', 'em'])) // completed
console.log(rememberMe(['rembr'])) // ememe
console.log(rememberMe(['zoqoqo', 'zeieie', 'azzreqwm', 'fdasb', 'ravae', 'rera', 'mmmmm'])) // completed

/*
   Uppercase sentence

   Diberikan sebuah paragraph, buatlah huruf pertama dari paragraph dan huruf pertama
   setelah tanda baca titik menjadi huruf besar.

   BUATLAH JUGA PSEUDOCODE -nya

   Rules:
    - Dilarang menggunakan regex, .reduce, .split, .indexOf
    - Wajib menggunakan pseudocode
*/

/*
// PSEUDOCODE
STORE DISPLAY with empty string
DO LOOP until paragraph.length
IF paragraph[i] equal to '.'
ADD DISPLAY with paragraph[i] TO UPPERCASE
ELSE ADD DISPLAY with paragraph[i]
RETURN DISPLAY
*/

function properUppercase(paragraph) {
  var display = ''

  for (i = 0; i < paragraph.length; i++) {
    var upper = paragraph[i]
    if(paragraph[i-2] === '.'){
      display += upper.toUpperCase()
    } else if( i === 0){
      display += upper.toUpperCase()
    } else {
      display += paragraph[i]
    }
  }
  return display
}

//TEST CASE
var paragraph1 = `we know it’s important that DevTools load quickly.
we have automation in place to help ensure we keep driving this time down. in 71 we got some help from the JavaScript team,
when their improvements to caching scripts for startup not only made Firefox start faster,
but DevTools too. one Console test got an astonishing 40% improvement while times across every panel were boosted by 8-15%!`

console.log(properUppercase(paragraph1));
console.log("======================")
//
// `We know it’s important that DevTools load quickly.
// We have automation in place to help ensure we keep driving this time down. In 71 we got some help from the JavaScript team,
// when their improvements to caching scripts for startup not only made Firefox start faster,
// but DevTools too. One Console test got an astonishing 40% improvement while times across every panel were boosted by 8-15%!`
//

var paragraph2 = `git push updates remote refs using local refs, while sending objects necessary to complete the given refs.
you can make interesting things happen to a repository every time you push into it, by setting up hooks there. see documentation for git-receive-pack(1).
when the command line does not specify where to push with the <repository> argument, branch"*"remote configuration for the current branch is consulted to determine where to push. if the configuration is missing, it defaults to origin.`

console.log(properUppercase(paragraph2))
// `Git push updates remote refs using local refs, while sending objects necessary to complete the given refs.
// You can make interesting things happen to a repository every time you push into it, by setting up hooks there. See documentation for git-receive-pack(1).
// When the command line does not specify where to push with the <repository> argument, branch"*"remote configuration for the current branch is consulted to determine where to push. If the configuration is missing, it defaults to origin.`

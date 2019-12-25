function palindrome(kata) {
    // you can only write your code here!
    reverse1 = '';

    for(i = kata.length-1; i >= 0; i--){
        reverse1 += kata[i]
    }

    if(reverse1 === kata){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
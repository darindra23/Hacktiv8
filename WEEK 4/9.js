function checkAB(num) {
    // you can only write your code here!
    var jarak = 4
    var check = false

    for (i = 0; i < num.length; i++) {
        if(num[i] === 'a' && num[i+jarak] === 'b'){
            check = true
        } else if(num[i] === 'b' && num[i+jarak] === 'a') {
            check = true
        }
    }
    return check
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  
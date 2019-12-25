function pasanganTerbesar(num) {
    // you can only write your code here!
    var display = String(num)
    var arr = []
    for(i = 0; i < display.length-1; i++){
        arr.push(display[i]+ display[i+1])
    }
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(arr[j] < arr[j+1]){
                var tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp 
            }
        }
    }
    return Number(arr[0])
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
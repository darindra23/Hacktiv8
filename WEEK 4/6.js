function digitPerkalianMinimum(angka) {
    var hasil = 0
    var tmp = ''

    for (i = 1; i <= angka; i++) {
        var cal = angka / i;
        tmp = i.toString() + cal.toString();
        if(hasil === 0){
            hasil = tmp.length;
        } else if(hasil > tmp.length){
            hasil = tmp.length
        }
    }
    return hasil
}

//   // TEST CASES
// console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2

// function countMe(str){
//    var tmp = []
//    for (i = 0; i < str.length; i++) {
//        var check  = true
//        for (j = 0; j < tmp.length; j++) {
//            if(str[i] == tmp[j][1]){
//                tmp[j][0]++
//                check = true
//            }
//        }
//        if (index === -1){
//            tmp.push([1,str[i]])
//        }
//    }
//    return tmp.sort((a,b) => b[0]-a[0])
// }

// console.log(countMe('ahabfaawidhwahdiwahdu'));
// BUBBLE SORT
function bubble(arr){
var arr1 = arr
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j+1]) {
            var tmp = arr[j]
            arr[j] = arr[j+1]
            arr [j+1] = tmp
        }
    }
}
return arr1
}
console.log(bubble([100,6,23,74,85,31]))

//PALINDROME
var nomor = number[i]
var reversed = 0
  while( nomor > 0){
    var kanan = Math.floor(nomor % 10);
    reversed = reversed * 10 + kanan;
    nomor = Math.floor(nomor/10)
}
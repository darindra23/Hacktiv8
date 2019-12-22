const balikString = str =>{
    var x =''
    for(i = str.length-1; i >= 0; i--){
        x += str[i]
    }
    return x
}
console.log(balikString('HelloWorld!'))
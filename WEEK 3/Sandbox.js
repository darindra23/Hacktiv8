function countColours(colours){
    var warna = ['kuning','merah','biru']
    var display = []
    
    for(i = 0 ; i < warna.length; i++){
        var counter = 0
        for(j = 0 ; j < colours.length; j ++){
            if(warna[i] === colours[j]){
                counter ++
            }     
        }
        display.push(counter)
    }
    return display
}


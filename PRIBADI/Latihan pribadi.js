function vowelsAndConsonants(s) {
    let vocal = 'aiueo'
    let consonant = 'bcdfghjklmnpqrstvwxyz'
    let x = ''
    let y = ''
    for( let i = 0; i < s.length; i++){
        
        for(let j=0; j < vocal.length; j++){
            if(s[i] === vocal[j]){
            x += s[i]
            console.log(x)
            x = ''
            }
        }
    }
    for( let i = 0; i < s.length; i++){
        let y = ''
        for(let j=0; j < consonant.length; j++){
            if(s[i] === consonant[j]){
                y += s[i]
                console.log(y)
                y = ''
            }
        }
        
    }
}

vowelsAndConsonants('darindra');
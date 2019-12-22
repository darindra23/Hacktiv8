var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

const dataHandling = input =>{
 display = []

    for(i = 0; i < input.length; i++){
        var id = input[i][0]
        var nama = input[i][1]
        var ttl = input[i][2]+' '+input[i][3]
        var hobi = input[i][4]
        display.push(`Nomor ID: ${id}\nNama: ${nama}\nTTL: ${ttl} \nHobi: ${hobi}`)
    
 }
 return display.join('\n\n')
}

console.log(dataHandling(input))
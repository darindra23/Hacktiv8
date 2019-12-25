var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

const dataHandling2 = arr =>{
    // Perintah 1
    arr.splice(1, 4, arr[1]+'Elsharawy', 'Provinsi '+ arr[2],arr[3],'Pria','SMA Internasional Metro')
    console.log(arr)

    // Perintah 2
    var split = arr[3].split('/')
    var tanggal = arr[3].split('/')
    
    switch(tanggal[1]){
        case '01':
            tanggal[1] = 'Januari';
            break;
        case '02':
            tangal[1] = 'Februari';
            break;
        case '03':
            tanggal[1] = 'Maret';
            break;
        case '04':
            tanggal[1] = 'April';
            break;
        case '05':
            tanggal[1] = 'Mei';
            break;
        case '06':
            tanggal[1] = 'Juni';
            break;
        case '07':
            tanggal[1] = 'Juli';
            break;
        case '08':
            tanggal[1] = 'Agustus';
            break;
        case '09':
            tanggal[1] = 'September';
            break; 
        case '10':
            tanggal[1] = 'Oktober';
            break;  
        case '11':
            tanggal[1] = 'November';
            break; 
        case '12':
            tanggal[1] = 'Desember';
            break; 
    }
    console.log(tanggal[1])

    //Perintah 3
    descending = []
    descending.push(split[0],split[1],split[2])

    for(i = 0; i < split.length; i++){
        for(j = 0; j < split.length; j++){
            if(Number(descending[j]) < Number(descending[j+1])){
                var tmp = descending[j]
                descending[j] = descending[j+1]
                descending[j+1] = tmp
            }
        }
        
    }
    console.log(descending)
    
    //Perintah 4
    console.log(split.join('-'))

    //Perintah 5
    return arr[1].slice(0,15)
}

console.log(dataHandling2(input))
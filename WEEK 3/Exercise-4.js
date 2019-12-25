var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

const dataHandling2 = arr =>{
    arr.splice(1, 4, arr[1]+'Elsharawy', 'Provinsi '+ arr[2],arr[3],'Pria','SMA Internasional Metro')
    var tanggal = arr[3].split('/')
    var split = arr[3].split('/') 
    var split1 = arr[3].split('/') 
    var slice = arr.slice(1,2)

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
    console.log(arr)
    console.log(tanggal[1])
    console.log(split.sort())
    console.log(split1.join('-'))
    console.log(slice)

    

}
console.log(dataHandling2(input))
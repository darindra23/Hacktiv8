function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var display = []
    for (i = 0; i < arrPenumpang.length; i++) {
        var angkot = {}
        var ongkos = 0
        for (j = 0; j < rute.length; j++) {
            ongkos += 2000
            if(arrPenumpang[i][1] === rute[j]){
                ongkos = 0
            } else if(arrPenumpang[i][2] === rute[j]){
                break
            }
        }
        angkot.penumpang = arrPenumpang[i][0]
        angkot.naikDari = arrPenumpang[i][1]
        angkot.tujuan = arrPenumpang[i][2]
        angkot.bayar = ongkos
        display.push(angkot)
    }
    return display
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
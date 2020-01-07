function MakanKantin(listHarga, history) {
    //write your code here
  }
  
  var hargaMakanan = [
    { nama: "ayam", harga: 5000 },
    { nama: "nasi", harga: 2000 },
    { nama: "cola", harga: 1000 },
    { nama: "chiki", harga: 1500 },
    { nama: "hotdog", harga: 3000 },
    { nama: "aqua", harga: 2000 }
  ]
  var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
  
  console.log(MakanKantin(hargaMakanan, historyPembelian))
  
  /*
  {
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
  }
  */
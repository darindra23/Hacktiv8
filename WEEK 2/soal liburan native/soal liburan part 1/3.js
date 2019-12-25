/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  //code below here
  var plat = ['A','B','C','D'], count; 
  for (i = 0; i < plat.length; i++) { 
    count = 0;
    for (j = 0; j < cars.length; j++) {
      if (cars[j] === plat[i]) {
        count++;
      }
    }
    plat[i] = [plat[i],100*count/cars.length];
  }

  var tmp;
  for (i = 0; i < plat.length-1; i++) { 
    for (j = 0; j < plat.length-1-i; j++) {
      if (plat[j][1] < plat[j+1][1]) {
        tmp = plat[j];
        plat[j] = plat[j+1];
        plat[j+1] = tmp;
      }
    }
  }
  return plat;
};

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/
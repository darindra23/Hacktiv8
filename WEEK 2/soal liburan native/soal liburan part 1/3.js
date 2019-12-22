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
  var tampung =[];
  var counter = 0

  for(i = 0; i < cars.length; i++){
    switch(cars[i]){
      case 'B':
        counter ++;
        tampung.push('B');
        tampung.push(counter/cars.length * 100);
        counter = 0;
        break;
      case 'D':
        counter ++;
        tampung.push('D');
        tampung.push(counter/cars.length * 100);
        counter = 0;
        break;
      case 'A':
        counter ++;
        tampung.push('A');
        tampung.push(counter/cars.length * 100);
        counter = 0;
        break;
      case 'C':
        counter ++;
        tampung.push('C');
        tampung.push(counter/cars.length * 100);
        counter = 0;
        break;
    }
  }
  return tampung
}


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
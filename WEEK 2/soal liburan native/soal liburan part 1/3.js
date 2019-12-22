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
  var counterB = 0;
  var counterD = 0;
  var counterA = 0;
  var counterC = 0;

  // PLAT B
  for(i = 0; i < cars.length; i++){
    if(cars [i] === 'B'){
      counterB ++
    }
  } 
  tampung.push('B')
  tampung.push(counterB/cars.length * 100)
  
  //PLAT D
  for(i = 0; i < cars.length; i++){
    if(cars [i] === 'D'){
      counterD ++
    }
  } 
  tampung.push('D')
  tampung.push(counterD/cars.length * 100)
  
  //PLAT A
  for(i = 0; i < cars.length; i++){
    if(cars [i] === 'A'){
      counterA ++
    }
  } 
  tampung.push('A')
  tampung.push(counterA/cars.length * 100)
  
  //PLAT A
  for(i = 0; i < cars.length; i++){
    if(cars [i] === 'C'){
      counterC ++
    }
  } 
  tampung.push('C')
  tampung.push(counterC/cars.length * 100)

  return tampung
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
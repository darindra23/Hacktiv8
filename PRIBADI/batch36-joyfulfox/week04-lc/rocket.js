/**
 * ============
 * Count Profit
 * ============
 * 
 * [DESCRIPTION]
 * PT XYZ memiliki beberapa cabang usaha masing masing cabang meberikan laporan bulanan income dan outcome mereka, 
 * data ini telah terkumpul dalam bentuk berikut
 * 
 * [EXAMPLE]
 * 
 * [INPUT]
 * @month  = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
 * @branches = [
 *   [ //Branch 1
 *     [4000, 2500, 2000, 2500, 2500, 3500, 3500, 2500, 2200, 3400, 2200, 4000], //Income
 *     [300, 900, 900, 900, 2200, 2300, 2300, 2200, 500, 1600, 500, 2200] //Expense
 *   ], 
 *   [ //Branch 2
 *     [2200, 2500, 2000, 2000, 2500, 4000, 2200, 2200, 2000, 2500, 2000, 3500], //Income
 *     [900, 2200, 900, 200, 900, 2200, 500, 500, 500, 2200, 1200, 2900] //Expense
 *   ], 
 *   [ //Branch 3
 *     [2000, 2500, 2200, 2200, 2500, 3300, 2900, 2500, 4500, 2900, 3500, 4000], //Income
 *     [500, 600, 500, 900, 2200, 2200, 2200, 1700, 2200, 2500, 2200, 2200] //Expense
 *   ] 
 * ]
 * 
 * dari data tersebut tampikan hasil `profit` perbulan masing-masing cabang dengan format sebagai berikut:
 * | {bulan} | {profit branch 1} | {profit branch 2} | {profit branch 3} |
 * 
 * [OUTPUT]
 *     | br 1 | br 2 | br 3 |
 * jan | 3700 | 1300 | 1500 |
 * feb | 1600 | 300  | 1900 |
 * mar | 1100 | 1100 | 1700 |
 * apr | 1600 | 1800 | 1300 |
 * may | 300  | 1600 | 300  |
 * jun | 1200 | 1800 | 1100 |
 * jul | 1200 | 1700 | 700  |
 * aug | 300  | 1700 | 800  |
 * sep | 1700 | 1500 | 2300 |
 * oct | 1800 | 300  | 400  |
 * nov | 1700 | 800  | 1300 |
 * dec | 1800 | 600  | 1800 |
 * 
 * [RULES]
 * 1. Dilarang menggunakan built-in function kecuali push.
 * */

function printBranch(branches) {
  var month = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
  var display = ''

  //LOOP BRANCH
  for (i= 0;i<=branches.length;i++) {
    if(i === 0){
      display += '     |'
    } else if(i === branches.length){
      display += `  br ${i} |\n`
    } else{
      display += `  br ${i} |`
    }
  }
  // LOOP DATA
  for(i = 0; i < 12; i++){
    display += ` ${month[i]} |`
    for (j = 0;j < branches.length; j++) {
      var cal = branches[j][0][i] - branches[j][1][i]      
      if(cal < 1000){
        display += `  ${cal}  |`
      } else{
        display += `  ${cal} |`
      }
    } 
    display += '\n'
  }
  return display
}
  
 
  //TEST CASE 1
  var data1 = [
    [[1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200]],
    [[1200, 2500, 2000, 2000, 1500, 2000, 1200, 1200, 2000, 2500, 2000, 3500], [700, 1200, 700, 1200, 700, 1200, 500, 500, 500, 1200, 1200, 1700]],
    [[2000, 1500, 1200, 1200, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], [500, 600, 500, 700, 1200, 1200, 1200, 1500, 1200, 1500, 1200, 2200]],
  ]
  
  console.log(printBranch(data1));
  
  /*
      | br 1 | br 2 | br 3 |
  jan | 700  | 500  | 1500 |
  feb | 800  | 1300 | 900  |
  mar | 1300 | 1300 | 700  |
  apr | 800  | 800  | 500  |
  may | 1300 | 800  | 300  |
  jun | 2200 | 800  | 800  |
  jul | 2200 | 700  | 800  |
  aug | 1300 | 700  | 1000 |
  sep | 700  | 1500 | 800  |
  oct | 800  | 1300 | 1000 |
  nov | 700  | 800  | 800  |
  dec | 1800 | 1800 | 1800 |
  */
  
  // TEST CASE 2
  var data2 = [
    [
      [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000],
      [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] 
    ]
  ]
  
  console.log(printBranch(data2))
  /*
      | br 1 |
  jan | 700  |
  feb | 800  |
  mar | 1300 |
  apr | 800  |
  may | 1300 |
  jun | 2200 |
  jul | 2200 |
  aug | 1300 |
  sep | 700  |
  oct | 800  |
  nov | 700  |
  dec | 1800 |
  */
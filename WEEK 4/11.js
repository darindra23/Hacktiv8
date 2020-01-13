function shoppingTime(memberId, money) {
   var brand = [ 
        ['Sepatu Stacattu',1500000],
        ['Baju Zoro',500000],
        ['Baju H&N',250000],
        ['Sweater Uniklooh',175000],
        ['Casing Handphone',50000] ]
    // LIST PURCHASED
    var purchased = []
    var dollar = money
    for (i = 0; i < brand.length; i++) {
        if(money >= brand[i][1]){
            purchased.push(brand[i][0])
            dollar -= brand[i][1]
        }
    }
    // OUPUT OBJECT
    var member = {}
    member.member = memberId
    member.money = money
    member.listPurchased = purchased
    member.changeMoney = dollar
    // CHECK OUTPUT
    if(!memberId || !money){
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    } else if(purchased == false){
        return `Mohon maaf, uang tidak cukup`
    } else {
        return member
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
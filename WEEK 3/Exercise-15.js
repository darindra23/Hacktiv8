function groupAnimals(animals) {
    var sort = animals
    var sementara = []
    var display = []
    
    // SORTING ANIMALS
    for(i = 0; i < sort.length; i++){
        for(j = 0; j < sort.length; j++){
            if(sort[j] > sort [j+1]){
                var tmp = sort[j]
                sort[j] = sort[j+1]
                sort[j+1] = tmp
            }
        }
    }
    // SORTING ARRAY
    var huruf = sort[0][0]
    for (var i = 0; i < animals.length; i++) {
        if (sort[i][0] === huruf) {
          sementara.push(animals[i]);
        } else {
          display.push(sementara);
          sementara = [];
          huruf = sort[i][0];
          sementara.push(animals[i]);
        }
        if (i === animals.length-1) {
          display.push(sementara);
        }
      }

    return display;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
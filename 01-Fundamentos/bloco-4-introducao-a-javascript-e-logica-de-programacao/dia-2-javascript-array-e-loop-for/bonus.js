let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/*<-----questão1------>*/
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array);
  console.log("");

  /*<-----questão2------>*/
  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array);
  console.log("");

  /*<-----questão3------>*/
  let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let numeros2 = [];
  
  for (let index = 0; index < numeros.length; index += 1) {
    if (index + 1 < numeros.length) {
        numeros2.push(numeros[index] * numeros[index + 1]);
    } else {
        numeros2.push(numeros[index] * 2);
    }
  }
  
  console.log(numeros2);
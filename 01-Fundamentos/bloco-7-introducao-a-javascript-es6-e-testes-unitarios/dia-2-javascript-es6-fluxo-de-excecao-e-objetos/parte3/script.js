const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //exercicio1
  const newKey = (obj, key, value) => {
    obj[key] = value;
  };

  newKey(lesson2, 'turno', 'noite');
  console.log(lesson2);
  //----------------------------------------------------------
  //exercicio2
  const objects = (obj) => Object.entries(obj);
  
  console.log(objects(lesson1));
  //---------------------------------------------
  //exercicio3
  const objLength = (obj) => Object.keys(obj).length;

  console.log(objLength(lesson1));
  //-------------------------------------------------------
  //exercicio4
  const valueObj = (obj) => Object.values(obj);

  console.log(valueObj(lesson3));
  //-----------------------------------------------
  //exercicio5
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  console.log(allLessons);
  //------------------------------------------------------------------------
  //exercicio6
  const totalEstudantes = (obj) => {
    let total = 0;

    const array = Object.keys(obj); //pegando as chaves do objeto

    for (index in array) { //iterar sobre o array de chaves
total += obj[array[index]].numeroEstudantes;
    }
    return total;
  };
console.log(totalEstudantes(allLessons));
//-------------------------------------------------------------------------
//exercicio7
const valuesObj = (obj, number) => Object.values(obj)[number];

console.log(valuesObj(lesson1, 3));
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
  const objects = (obj) => Object.keys(obj);
  
  console.log(objects(lesson1));
  //---------------------------------------------
  //exercicio3
  const objLength = (obj) => Object.entries(obj).length;

  console.log(objLength(lesson1));
  //-------------------------------------------------------
  //exercicio4
  const valueObj = (obj) => Object.values(obj);

  console.log(valueObj(lesson3));
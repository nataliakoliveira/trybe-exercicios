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
  
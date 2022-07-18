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

function changeTurn (object, key, valor) {
    const addObjectPro = object[valor] = key
    return addObjectPro
}
changeTurn(lesson2, 'noite', 'turno');
console.log(lesson2);

function listKeys (object) {
    const listingObject = Object.keys(object)
    return listingObject
}
console.log(listKeys(lesson1));

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

const listValues  = (object) => Object.values(object)
console.log(listValues(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for(i in array){
        total += obj[array[i]].numeroEstudantes;
    }
    return total
}
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 2));

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));
// const id1 = () => employees['id1'] = { nome: `${name}`, email: `${name.replace(' ','_')}@trybe.com`, }
// const id2 = () => employees.id2 = { nome: `${name}`, email: `${name.replace(' ','_')}@trybe.com`, }
// const id3 = () => employees.id3 = { nome: `${name}`, email: `${name.replace(' ','_')}@trybe.com`, }

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const creatEmployee = (name) => {
    return {
        nome: `${name}`,
        email: `${name.toLowerCase().replace(' ','_')}@trybe.com`,
    }
}
console.log(newEmployees(creatEmployee));

const numberChecker = (myNumber, number) => myNumber === number;
const sorteio = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(myNumber, number) ? 'Você venceu!' : 'Você perdeu!';
}
console.log(sorteio(3, numberChecker));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const correction = (gabarito,resEstudante, verifyAnswers) => {
    const result = verifyAnswers(gabarito, resEstudante);
    return result;
}
const verifyAnswers = () => {
    let result = 0;
    for (let i = 0; i < STUDENT_ANSWERS.length; i++) {
        if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
            result += 1;
        } else if (STUDENT_ANSWERS[i] === 'N.A') {
            result += 0;
        } else {
          result -= 0.5;
        }
    }
    return `Resultado final: ${result} pontos`;
}
console.log(correction(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));

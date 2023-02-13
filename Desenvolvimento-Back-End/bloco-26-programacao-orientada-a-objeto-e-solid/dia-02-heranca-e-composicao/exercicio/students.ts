import Person from "./person";

export default class Students extends Person{
  private _enrollment = String();
  private _examsGrades: Array<number>;
  private _assignmentsGrades: Array<number>;

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

    this._assignmentsGrades = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this._examsGrades = value;
  }

  get sumNotas(): void {
    const AllNotes = [ ...this._examsGrades, ...this._assignmentsGrades ];
    let sumNote = 0

    for (let value of AllNotes){
      sumNote = sumNote + value
    }

    return  console.log(`A soma de todas suas Notas: ${sumNote}`)
  }

  get mediaNotas(): void {
    const AllNotes = [ ...this._examsGrades, ...this._assignmentsGrades ];
    let sumNote = 0

    for (let value of AllNotes){
      sumNote = sumNote + value
    }

    return console.log(`A media da suas notas são: ${(sumNote / AllNotes.length).toFixed(1)}`)
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}

const carolina = new Students('Carolina da Silva', new Date('2005/03/17'));
carolina.examsGrades = [25, 20, 25, 23];

console.log(carolina.enrollment)
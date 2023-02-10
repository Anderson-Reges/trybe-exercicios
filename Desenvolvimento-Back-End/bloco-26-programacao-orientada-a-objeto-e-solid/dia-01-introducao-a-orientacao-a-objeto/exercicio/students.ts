export default class Students {
  private _matricula: number;
  private _nome: string;
  private _notasProva: Array<number>;
  private _notasTrabalho: Array<number>;

  constructor(m:number, n: string, p: Array<number>, t: Array<number>) {
    this._matricula = m  
    this._nome = n
    this._notasProva = p
    this._notasTrabalho = t 
  }

  get notasT(): Array<number> {
    return this._notasTrabalho
  }

  get notasP(): Array<number> {
    return this._notasProva
  }

  get sumNotas(): void {
    const AllNotes = [ ...this._notasProva, ...this._notasTrabalho ];
    let sumNote = 0

    for (let value of AllNotes){
      sumNote = sumNote + value
    }

    return  console.log(`A soma de todas suas Notas: ${sumNote}`)
  }

  get mediaNotas(): void {
    const AllNotes = [ ...this._notasProva, ...this._notasTrabalho ];
    let sumNote = 0

    for (let value of AllNotes){
      sumNote = sumNote + value
    }

    return console.log(`A media da suas notas são: ${(sumNote / AllNotes.length).toFixed(1)}`)
  }
}

const Carla = new Students(789426, 'Carla', [7.5, 9, 8.2, 10], [10, 8]);
Carla.sumNotas
Carla.mediaNotas

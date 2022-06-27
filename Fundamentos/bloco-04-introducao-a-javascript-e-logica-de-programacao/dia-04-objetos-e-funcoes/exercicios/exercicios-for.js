//exercicio 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-vinda', info['personagem'])

//exercicios 2

info['recorrente'] = 'sim'

console.log(info);

//exercicios 3

for(let valor in info){
  console.log(valor);
}

//exercicio 4

for(let valor in info){
  console.log(info[valor]);
}

//exercicio 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

for(let merge in info2){
    if(merge === 'recorrente' && info[merge] === 'sim' && info2[merge] === 'sim'){
      console.log('Ambos recorrentes');
    }
    else{
      console.log(info[merge] + ' e ' + info2[merge]);
    }
}

//exercicio 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito da ' + leitor.nome + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

//exercicio 7

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
},
);

//exercicios 8

console.log("Julia tem " + leitor.livrosFavoritos.length+ " livros favoritos")

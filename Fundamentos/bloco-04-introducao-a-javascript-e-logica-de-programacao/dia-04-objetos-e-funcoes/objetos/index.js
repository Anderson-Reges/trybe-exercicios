//fixação 1

let players = {
    name : 'Marta',
    lastName: 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 },
}

//fixação 2

console.log("A jogadora"+ " " + players.name + ' ' + players.lastName + ' tem ' + players.age + ' anos idade.');

//fixação 3

players.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

//fixação 4

console.log("A jogadora " + players.name + ' ' + players.lastName + " foi eleita a melhor do mundo por " + players.bestInTheWorld.length + " vezes.")

//fixação 5

console.log("A jogadora possui " + players['medals']['golden'] + ' medalhas de ouro' +" e " + players['medals']['silver'] + ' medalhas de prata' +'.');

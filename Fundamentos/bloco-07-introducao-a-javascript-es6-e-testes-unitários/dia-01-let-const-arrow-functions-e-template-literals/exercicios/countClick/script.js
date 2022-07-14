let countNumber = document.getElementById('contador');
const button = document.getElementById('botao');
let receiveCliks = 0;

button.addEventListener('click', () => countNumber.innerHTML = receiveCliks += 1);
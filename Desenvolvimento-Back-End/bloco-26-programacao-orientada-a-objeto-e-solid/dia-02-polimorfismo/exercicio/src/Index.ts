import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();
clube.adicionarQuadra(quadraFutebol)

console.log(clube.getQuadras)

const dataReserva = new Date('2022-02-20')

const reservarQuadraFutebol = clube
    .buscarQuadra<QuadraFutebol>(0) 
    .reservar(dataReserva);
    console.log(reservarQuadraFutebol);
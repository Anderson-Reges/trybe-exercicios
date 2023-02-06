class Car {
  brand: string;
  color: string;
  doors: number;

  constructor (brand: string, color: string, doors: number) {
    this.brand = brand
    this.color = color
    this.doors = doors
  }

  honk(): void {
    console.log('buzina acionada');
  }
  turnOn(): void {
    console.log('carro ligado');
  }
  turnOff(): void {
    console.log('carro desligado');
  }
  speedUp(): void {
    console.log('acelera o carro');
  }
  speedDown(): void {
    console.log('velocidade reduzida');
  }
  stop(): void {
    console.log('para o carro');
  }
  turn(direction : string): void {
    console.log(`o carro virou a ${direction}`);
  }
}

const carUber = new Car('volkswagen', 'prata', 4);
carUber.turnOn();
carUber.speedUp();
carUber.speedDown();
carUber.turn("esquerda");
carUber.speedUp();
carUber.speedDown();
carUber.turn("direita");
carUber.speedUp();
carUber.speedDown();
carUber.turn("direita");
carUber.speedDown();
carUber.stop();
carUber.speedUp();
carUber.speedDown();
carUber.turn("direita");
carUber.speedUp();
carUber.speedDown();
carUber.turn("esquerda");
carUber.speedUp();
carUber.speedDown();
carUber.turn("direita");
carUber.speedDown();
carUber.stop();
carUber.speedUp();
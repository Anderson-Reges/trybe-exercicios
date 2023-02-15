import { IVehicleFly, IVehicleDrive } from './interfaces/IVehicle';

export default class FuturisticCar implements IVehicleFly {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}

export class Car implements IVehicleDrive{
  drive(): void { console.log('Drive a car'); }
}

export class Airplane implements IVehicleFly{
  fly(): void { console.log('Flying a airplane'); }
}

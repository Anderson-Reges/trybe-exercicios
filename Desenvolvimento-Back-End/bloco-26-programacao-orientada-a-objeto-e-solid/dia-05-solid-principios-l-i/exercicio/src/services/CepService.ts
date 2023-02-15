import { IFooCepAPI } from '../FooCepAPI';

class CepService {
  private readonly cepApi: IFooCepAPI;

  constructor(FooCepAPI: IFooCepAPI) {
    this.cepApi = FooCepAPI;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
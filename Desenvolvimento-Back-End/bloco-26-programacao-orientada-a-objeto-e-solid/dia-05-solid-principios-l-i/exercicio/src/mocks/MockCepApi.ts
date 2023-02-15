import { IFooCepAPI } from '../FooCepAPI';

class MockCepApi implements IFooCepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `The mock address for "cep:${cep}, n°:${number}" is "mock address"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `The mock cep for: "${address}, n°:${number}" is "mock cep"`;
  }
}

export default MockCepApi;
import FooCepAPI from './FooCepAPI'
import CepService from './services/CepService';

async function main() {
  const cepSvc = new CepService(new FooCepAPI());

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();
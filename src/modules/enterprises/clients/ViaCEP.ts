import { AxiosResponse, AxiosStatic } from 'axios';

interface IViaCEPResponse {
  cep: string;
  logradouro: string;
  localidade: string;
  uf: string;
}

interface IAddressNormalize {
  address: string;
  postalCode: string;
  city: string;
  state: string;
}

export class ViaCEP {
  constructor(protected request: AxiosStatic) {
    /** */
  }

  public async fetchPoints(postalCode: string): Promise<AxiosResponse> {
    const response = await this.request.get<IViaCEPResponse>(
      `https://viacep.com.br/ws/${postalCode}/json/`,
    );

    return response;
  }

  public normalizeResponse(address: IViaCEPResponse): IAddressNormalize {
    const newAddress = {
      address: address.logradouro,
      postalCode: address.cep,
      city: address.localidade,
      state: address.uf,
    } as IAddressNormalize;

    return newAddress;
  }
}

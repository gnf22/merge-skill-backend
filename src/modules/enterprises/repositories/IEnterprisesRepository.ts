import { ICreateEnterpriseDTO } from '../dtos/ICreateEnterpriseDTO';

export interface IEnterprisesRepository {
  create(data: ICreateEnterpriseDTO): Promise<void>;
}

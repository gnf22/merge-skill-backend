import { getRepository, Repository } from 'typeorm';

import { ICreateEnterpriseDTO } from '../../dtos/ICreateEnterpriseDTO';
import { Enterprise } from '../../entities/Enterprise';
import { IEnterprisesRepository } from '../IEnterprisesRepository';

export class EnterprisesRepository implements IEnterprisesRepository {
  private repository: Repository<Enterprise>;

  constructor() {
    this.repository = getRepository(Enterprise);
  }

  async create({
    name,
    description,
    telephone,
    address,
    number,
    city,
    state,
    postalCode,
    user_id,
  }: ICreateEnterpriseDTO): Promise<void> {
    const enterprise = this.repository.create({
      name,
      description,
      telephone,
      address,
      number,
      city,
      state,
      postalCode,
      user_id,
    });

    console.log(enterprise);

    await this.repository.save(enterprise);
  }
}

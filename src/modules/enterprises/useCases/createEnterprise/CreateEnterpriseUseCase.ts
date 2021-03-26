import axios from 'axios';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { ViaCEP } from '../../clients/ViaCEP';
import { IEnterprisesRepository } from '../../repositories/IEnterprisesRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  description: string;
  telephone: string;
  postalCode: string;
  number: number;
}

@injectable()
export class CreateEnterpriseUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('EnterprisesRepository')
    private enterprisesRepository: IEnterprisesRepository,
  ) {
    /** */
  }

  async execute({
    name,
    email,
    password,
    description,
    telephone,
    number,
    postalCode,
  }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const viaCep = new ViaCEP(axios);

    if (postalCode.length !== 8) {
      throw new AppError('Postal code must be 8 characters long', 422);
    }

    const viaCepResponse = await viaCep.fetchPoints(postalCode);

    if (viaCepResponse.data.erro === true) {
      throw new AppError('Please enter a valid postal code', 422);
    }

    const {
      address,
      city,
      state,
      postalCode: postal,
    } = viaCep.normalizeResponse(viaCepResponse.data);

    const user = await this.usersRepository.create({
      email,
      password,
      isEnterprise: true,
    });

    await this.enterprisesRepository.create({
      name,
      description,
      telephone,
      address,
      number,
      city,
      state,
      postalCode: postal,
      user_id: user.id,
    });
  }
}

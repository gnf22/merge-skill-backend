import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { ICreateApplicantDTO } from '../../dtos/ICreateApplicantDTO';
import { IApplicantsRepository } from '../../repositories/IApplicantsRepository';

@injectable()
export class CreateApplicantUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('ApplicantsRepository')
    private applicantsRepository: IApplicantsRepository,
  ) {
    /** */
  }

  async execute({
    name,
    email,
    password,
    biography,
    telephone,
    dateOfBirth,
    schooling,
    isWorking,
    user_id,
  }: ICreateApplicantDTO): Promise<void> {
    await this.usersRepository.create({
      email,
      password,
      isEnterprise: false,
    });

    await this.applicantsRepository.create({
      name,
      biography,
      telephone,
      dateOfBirth,
      schooling,
      isWorking,
      user_id,
    });
  }
}

import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
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
  }: ICreateApplicantDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const user = this.usersRepository.create({
      email,
      password,
      isEnterprise: false,
    });

    const applicant = this.applicantsRepository.create({
      name,
      biography,
      telephone,
      dateOfBirth,
      schooling,
      isWorking,
      user_id: user.id,
    });

    await this.applicantsRepository.save(user, applicant);
  }
}

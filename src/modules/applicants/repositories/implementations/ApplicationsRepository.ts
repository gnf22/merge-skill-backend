import { getRepository, Repository } from 'typeorm';

import { ICreateApplicantDTO } from '../../dtos/ICreateApplicantDTO';
import { Applicant } from '../../entities/Applicant';
import { IApplicantsRepository } from '../IApplicantsRepository';

export class ApplicantsRepository implements IApplicantsRepository {
  private repository: Repository<Applicant>;

  constructor() {
    this.repository = getRepository(Applicant);
  }

  async create({
    name,
    biography,
    telephone,
    dateOfBirth,
    schooling,
    isWorking,
    user_id,
  }: ICreateApplicantDTO): Promise<void> {
    const applicant = this.repository.create({
      name,
      biography,
      telephone,
      dateOfBirth,
      schooling,
      isWorking,
      user_id,
    });

    await this.repository.save(applicant);
  }
}

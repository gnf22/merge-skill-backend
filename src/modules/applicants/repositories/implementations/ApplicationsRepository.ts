import { getRepository, Repository, getManager } from 'typeorm';

import { User } from '../../../users/entities/User';
import { ICreateApplicantDTO } from '../../dtos/ICreateApplicantDTO';
import { Applicant } from '../../entities/Applicant';
import { IApplicantsRepository } from '../IApplicantsRepository';

export class ApplicantsRepository implements IApplicantsRepository {
  protected repository: Repository<Applicant>;

  constructor() {
    this.repository = getRepository(Applicant);
  }

  create({
    name,
    biography,
    telephone,
    dateOfBirth,
    schooling,
    isWorking,
    user_id,
  }: ICreateApplicantDTO): Applicant {
    const applicant = this.repository.create({
      name,
      biography,
      telephone,
      dateOfBirth,
      schooling,
      isWorking,
      user_id,
    });

    return applicant;
  }

  async save(user: User, applicant: Applicant): Promise<void> {
    await getManager().transaction(async entityManager => {
      await entityManager.save(user);
      await entityManager.save(applicant);
    });
  }
}

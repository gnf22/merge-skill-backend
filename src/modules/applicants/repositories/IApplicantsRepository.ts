import { User } from '../../users/entities/User';
import { ICreateApplicantDTO } from '../dtos/ICreateApplicantDTO';
import { Applicant } from '../entities/Applicant';

export interface IApplicantsRepository {
  create(data: ICreateApplicantDTO): Applicant;
  save(user: User, applicant: Applicant): Promise<void>;
}

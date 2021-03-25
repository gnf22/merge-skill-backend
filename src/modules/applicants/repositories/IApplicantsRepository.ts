import { ICreateApplicantDTO } from '../dtos/ICreateApplicantDTO';

export interface IApplicantsRepository {
  create(data: ICreateApplicantDTO): Promise<void>;
}

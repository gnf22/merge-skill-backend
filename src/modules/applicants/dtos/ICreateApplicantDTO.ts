import { SchoolingRole } from '../entities/Applicant';

export interface ICreateApplicantDTO {
  name: string;
  email?: string;
  password?: string;
  biography: string;
  telephone: string;
  dateOfBirth: Date;
  schooling: SchoolingRole;
  isWorking: boolean;
  user_id: string;
}

import { container } from 'tsyringe';

import { IApplicantsRepository } from '../../modules/applicants/repositories/IApplicantsRepository';
import { ApplicantsRepository } from '../../modules/applicants/repositories/implementations/ApplicationsRepository';
import { UsersRepository } from '../../modules/users/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IApplicantsRepository>(
  'ApplicantsRepository',
  ApplicantsRepository,
);

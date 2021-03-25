import { Router } from 'express';

import { CreateApplicantController } from '../modules/applicants/useCases/createApplicant/CreateApplicantController';

export const applicantsRoutes = Router();

const createApplicantController = new CreateApplicantController();

applicantsRoutes.post('/', createApplicantController.handle);

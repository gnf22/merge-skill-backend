import { Router } from 'express';

import { CreateEnterpriseController } from '../modules/enterprises/useCases/createEnterprise/CreateEnterpriseController';

export const enterprisesRoutes = Router();

const createEnterpriseController = new CreateEnterpriseController();

enterprisesRoutes.post('/', createEnterpriseController.handle);

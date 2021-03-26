import { Router } from 'express';

import { applicantsRoutes } from './applicants.routes';
import { enterprisesRoutes } from './enterprises.routes';

export const router = Router();

router.use('/applicants', applicantsRoutes);
router.use('/enterprises', enterprisesRoutes);

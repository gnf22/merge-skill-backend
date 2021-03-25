import { Router } from 'express';

import { applicantsRoutes } from './applicants.routes';

export const router = Router();

router.use('/applicants', applicantsRoutes);

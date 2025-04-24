import { Router } from 'express';
const router = Router();

import weatherRoutes from './weatherRoutes.ts';

router.use('/weather', weatherRoutes);

export default router;

import { Router } from 'express';
import courseRoutes from './content.route';

const router = Router();

router.use('/course', courseRoutes);

export default router;

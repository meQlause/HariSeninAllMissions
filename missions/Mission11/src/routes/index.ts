import { Router } from 'express';
import courseRoutes from './content.route';
import userRoutes from './user.route';
import uploadRoutes from './upload.route';

const router = Router();

router.use('/course', courseRoutes);
router.use('/user', userRoutes);
router.use('/file', uploadRoutes);

export default router;

import { Router } from 'express';
import * as uploadController from '../controllers/upload.controller';
import * as multerMiddleware from '../middlewares/multer.middleware';
import * as authMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.post('/upload', authMiddleware.authMiddleware, multerMiddleware.upload.single("file"), uploadController.upload);
router.get('/image/:filename', uploadController.image);

export default router;

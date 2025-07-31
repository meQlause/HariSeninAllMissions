import { Router } from 'express';
import * as courseController from '../controllers/course.controller';
import * as authMiddleware from '../middlewares/auth.middleware';
import * as paramMiddleware from '../middlewares/extractParam.middleware';

const router = Router();

router.get('/search', authMiddleware.authMiddleware, paramMiddleware.extractParamMiddleware, courseController.search);

router.get('/', courseController.getCourses);
router.post('/', authMiddleware.authMiddleware, courseController.addCourse);

router.get('/:id', authMiddleware.authMiddleware, courseController.getCourseById);
router.put('/:id', authMiddleware.authMiddleware, courseController.editCourseById);
router.delete('/:id', authMiddleware.authMiddleware, courseController.deleteCourseById);

export default router;

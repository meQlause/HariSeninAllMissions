import { Router } from 'express';
import * as courseController from '../controllers/course.controller';

const router = Router();

router.get('/', courseController.getCourses);
router.post('/', courseController.addCourse);
router.get('/:id', courseController.getCourseById);
router.put('/:id', courseController.editCourseById);
router.delete('/:id', courseController.deleteCourseById);

export default router;

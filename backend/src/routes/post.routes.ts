import { Router } from 'express';
import { postController } from '../controllers/Post.controller';
import { postUpload } from '../middlewares/upload.middleware';

const router = Router();

router.get('/', (req, res) => postController.findAll(req, res));
router.get('/published', (req, res) => postController.findPublished(req, res));
router.get('/:id', (req, res) => postController.findById(req, res));
router.post('/', postUpload, (req, res) => postController.create(req, res));
router.put('/:id', postUpload, (req, res) => postController.update(req, res));
router.delete('/:id', (req, res) => postController.delete(req, res));
router.patch('/:id/publish', (req, res) => postController.publish(req, res));
router.patch('/:id/unpublish', (req, res) => postController.unpublish(req, res));

export default router;

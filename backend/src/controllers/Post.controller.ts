import { Request, Response } from 'express';
import { PostService } from '../services/Post.service';
import { uploadService } from '../services/Upload.service';
import fs from 'fs';

const postService = new PostService();

interface MulterFiles {
  thumbnail?: Express.Multer.File[];
  file?: Express.Multer.File[];
}

export class PostController {
  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const posts = await postService.findAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar posts' });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const post = await postService.findById(Number(id));
      if (!post) {
        res.status(404).json({ error: 'Post não encontrado' });
        return;
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar post' });
    }
  }

  async findPublished(req: Request, res: Response): Promise<void> {
    try {
      const posts = await postService.findPublished();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar posts publicados' });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, published } = req.body;
      const files = req.files as MulterFiles;

      if (!title) {
        res.status(400).json({ error: 'Título é obrigatório' });
        return;
      }

      if (!files?.thumbnail?.[0] || !files?.file?.[0]) {
        res.status(400).json({ error: 'Thumbnail (imagem) e arquivo (PDF) são obrigatórios' });
        return;
      }

      // Upload da thumbnail para o Cloudinary
      const thumbnailResult = await uploadService.uploadImage(files.thumbnail[0].path);
      
      // Upload do PDF para o Cloudinary
      const pdfResult = await uploadService.uploadPdf(files.file[0].path);

      // Remover arquivos temporários
      fs.unlinkSync(files.thumbnail[0].path);
      fs.unlinkSync(files.file[0].path);

      const post = await postService.create({
        title,
        thumbnail: thumbnailResult.secure_url,
        file: pdfResult.secure_url,
        published: published === 'true' || published === true,
      });

      res.status(201).json(post);
    } catch (error) {
      console.error('Erro ao criar post:', error);
      res.status(500).json({ error: 'Erro ao criar post' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { title, published } = req.body;
      const files = req.files as MulterFiles;

      const updateData: {
        title?: string;
        thumbnail?: string;
        file?: string;
        published?: boolean;
      } = {};

      if (title) updateData.title = title;
      if (published !== undefined) updateData.published = published === 'true' || published === true;

      // Se houver nova thumbnail
      if (files?.thumbnail?.[0]) {
        const thumbnailResult = await uploadService.uploadImage(files.thumbnail[0].path);
        updateData.thumbnail = thumbnailResult.secure_url;
        fs.unlinkSync(files.thumbnail[0].path);
      }

      // Se houver novo PDF
      if (files?.file?.[0]) {
        const pdfResult = await uploadService.uploadPdf(files.file[0].path);
        updateData.file = pdfResult.secure_url;
        fs.unlinkSync(files.file[0].path);
      }

      const post = await postService.update(Number(id), updateData);
      res.json(post);
    } catch (error) {
      console.error('Erro ao atualizar post:', error);
      res.status(500).json({ error: 'Erro ao atualizar post' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await postService.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar post' });
    }
  }

  async publish(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const post = await postService.publish(Number(id));
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao publicar post' });
    }
  }

  async unpublish(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const post = await postService.unpublish(Number(id));
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao despublicar post' });
    }
  }
}

export const postController = new PostController();

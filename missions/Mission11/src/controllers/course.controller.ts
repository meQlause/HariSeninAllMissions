import { Request, Response } from 'express';
import * as contentService from '../services/content.service';
import { addCourseDTO } from '../dtos/addCourse.dto';

export const getCourses = async (req: Request, res: Response) => {
    try {
        const produk = await contentService.getAllProducts();
        res.status(201).json(produk);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed retrieving data' });
    }
};

export const addCourse = async (req: Request, res: Response) => {
    try {
        const data: addCourseDTO = req.body;
        const produk = await contentService.createproduct(data);
        res.status(201).json(produk);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create produk' });
    }
};

export const getCourseById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const produk = await contentService.getProductById(id);
        res.status(201).json(produk);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed retrieving spesific data' });
    }
};

export const deleteCourseById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const produk = await contentService.deleteProductById(id);
        res.status(201).json(produk);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed deleting spesific data' });
    }
};

export const editCourseById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID' });
    }

    const updated = await contentService.updateProductById(id, req.body);

    if (!updated) {
        return res.status(404).json({ error: 'Produk not found or nothing to update' });
    }

    res.status(200).json(updated);
};


export const search = async (req: Request, res: Response) => {
    try {
        const produk = await contentService.searchProduct(req.queryParam ? req.queryParam : undefined);
        res.status(201).json(produk);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create produk' });
    }
};
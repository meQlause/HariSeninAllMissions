import { Request, Response } from 'express';
import path from 'path';

export const upload = (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    res.status(200).json({
        message: 'File uploaded successfully',
        filename: req.file.filename,
        path: req.file.path,
        url: `${process.env.SERVER}/api/course/file/image/${req.file.filename}`
    });
}

export const image = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../uploads', req.params.filename));
}
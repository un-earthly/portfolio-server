import { Request, Response } from 'express';
import multer, { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import sharp from 'sharp';
import ApiError from '../errors/ApiError';
import { StatusCodes } from 'http-status-codes';
import fs from "fs"
const storage = diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueFileName = uuidv4() + path.extname(file.originalname);
        cb(null, uniqueFileName);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(null, true)
    }
});

export const handleImageUpload = (req: Request, res: Response, next: any) => {
    upload.single('image')(req, res, async (err: any) => {
        if (err instanceof multer.MulterError) {
            return next(new ApiError(StatusCodes.BAD_REQUEST, 'Error uploading image'));
        } else if (err) {
            return next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Unknown error occurred'));
        }

        if (!req.file) {
            return next(new ApiError(StatusCodes.BAD_REQUEST, 'No image uploaded'));
        }

        try {
            const outputFilename = req.file.filename.replace(/\.[^/.]+$/, '.webp');
            await sharp(req.file.path).resize(800).toFile(path.join(__dirname, '../uploads', outputFilename));
            req.body.image = `localhost/uploads/${outputFilename}`;
            fs.unlinkSync(req.file.path);
            next();
        } catch (error) {
            return next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error processing image'));
        }
    });
};

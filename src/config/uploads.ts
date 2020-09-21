import multer, { StorageEngine } from 'multer'
import path from 'path'
import crypto from 'crypto'
const tempFolder = path.resolve(__dirname, '..', '..', 'temp')
const uploadsFolder = path.resolve(tempFolder, 'uploads', 'images')

interface IUploadConfig{
    driver: 's3' | 'disk';
    tempFolder: string;
    uploadsFolder: string;
    multer: {
        storage: StorageEngine;
    };
    config: {
        disk: {};
        aws: {
            bucket: string;
        }
    }

}

export default {
    driver: process.env.STORAGE_DRIVER,
    tempFolder,
    uploadsFolder,
    multer: {
    storage: multer.diskStorage({
        destination: tempFolder,
        filename:(request, file, callback)=>{
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`.replace(/ /g,'-');
            return callback(null, fileName);
            },
        }),
    },
    config:{
        disk: {},
        aws: {
            bucket: 'makeList-images'
        }
    }

} as IUploadConfig
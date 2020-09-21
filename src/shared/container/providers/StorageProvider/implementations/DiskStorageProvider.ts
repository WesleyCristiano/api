import IStorageProvider from "../models/IStorageProvider";
import fs from 'fs'
import path from 'path'

import  uploadsConfig from "@config/uploads";
 

class DiskStorageProvider implements IStorageProvider{
    public async save(file:string): Promise<string>{
        await fs.promises.rename(
            path.resolve(uploadsConfig.tempFolder, file),
            path.resolve(uploadsConfig.uploadsFolder, file)
        )
        return file
    }
    public async delete(file:string): Promise<void>{
        const filePath = path.resolve(uploadsConfig.uploadsFolder, file)
        try{
            await fs.promises.stat(filePath)
        }catch(err){
            return
        }
        await fs.promises.unlink(filePath)
    }
}

export default DiskStorageProvider
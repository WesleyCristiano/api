import IStorageProvider from "../models/IStorageProvider";

export default class FakeStorageProvider implements IStorageProvider{
    private storage: string[] = []

    public async save(file: string): Promise<string>{
        this.storage.push(file)
        return file
    }

    public async delete(file: string): Promise<void>{
        const indexFound = await this.storage.findIndex(f=> f == file)
        this.storage.splice(indexFound, 1)
    }
}
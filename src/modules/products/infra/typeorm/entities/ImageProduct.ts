import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import Product from "./Product";

@Entity('images_products')
class ImageProduct{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    product_id: string;

    @Column()
    file_name:string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(()=>Product, { 
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({
        name: 'product_id',
        referencedColumnName: 'id'
    })
    product: Product;
}

export default ImageProduct
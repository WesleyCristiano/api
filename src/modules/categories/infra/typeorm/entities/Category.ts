import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToMany
} from 'typeorm'
import Product from '@modules/products/infra/typeorm/entities/Product';

@Entity('categories')
class Category{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    @ManyToMany(()=> Product, {
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    products: Product[]


}

export default Category
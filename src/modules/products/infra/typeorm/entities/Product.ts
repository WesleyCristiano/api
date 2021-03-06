import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne, 
    JoinColumn, 
    ManyToMany, 
    JoinTable,
    OneToMany
} from 'typeorm'
import Store from '@modules/stores/infra/typeorm/entities/Store';
import Category from '@modules/categories/infra/typeorm/entities/Category';
import ImageProduct from './ImageProduct';

@Entity('products')
class Product{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('uuid')
    store_id: string;

    @Column({
        nullable: true
    })   
    description:string;

    @Column()
    quantity: number;

    @Column('decimal')
    price: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(()=> Store)
    @JoinColumn({name: 'store_id'})
    store: Store;

    @ManyToMany(()=> Category, {
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinTable({    
        name: 'products_categories',
        joinColumn:{
            name: 'product_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'category_id',
            referencedColumnName: 'id'
        }
    })
    categories: Category[]

    @OneToMany(()=> ImageProduct, image=>image.product, {
        eager: true,
        cascade: true,
        nullable:true
    })
    images_product: ImageProduct[]
}
export default Product
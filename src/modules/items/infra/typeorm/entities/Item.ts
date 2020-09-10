import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, JoinColumn, JoinTable} from 'typeorm'
import Category from '@modules/categories/infra/typeorm/entities/Category';
import List from '@modules/lists/infra/typeorm/entities/List';

@Entity('items')
class Item{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid',{
        nullable: true
    })
    list_id: string;

    @Column('int')
    order_number: number;
    
    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
    @ManyToOne(()=> List, list=> list.items, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({
        name: 'list_id',
        referencedColumnName: 'id'
    })
    list: List

    @ManyToMany(()=>Category, {
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: 'CASCADE'
    })
    @JoinTable({
        name: 'items_categories',
        joinColumn:{
            name: 'item_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'category_id',
            referencedColumnName: 'id'
        }
    })
    categories: Category[]

}

export default Item
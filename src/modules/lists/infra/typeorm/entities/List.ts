import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, JoinColumn, OneToMany} from 'typeorm'
import School from '@modules/schools/infra/typeorm/entities/School';
import Item from '@modules/items/infra/typeorm/entities/Item';

@Entity('lists')
class List{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    school_id: string;

    @Column()
    grade_name: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(()=>School, {
        cascade: true,
        onDelete: "NO ACTION",
        onUpdate: 'CASCADE'
    } )
    @JoinColumn({
        name: 'school_id',
        referencedColumnName: 'id'
    })
    school: School

    @OneToMany(()=> Item, item=> item.list, {
        cascade: true
    } )
    items: Item[]

}

export default List
import {
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany} from 'typeorm'
import Address from '@modules/addresses/infra/typeorm/entities/Address';
import List from '@modules/lists/infra/typeorm/entities/List';

@Entity('schools')
class School{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid', {
        nullable: true
    })
    address_id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date

    @OneToOne(type=>Address, {
        cascade: ['insert', 'update', 'soft-remove'],
        onDelete: 'SET NULL',
        onUpdate: "CASCADE",
    })
    @JoinColumn({
        name: 'address_id',
        referencedColumnName: 'id',
    })
    address: Address

    @OneToMany(()=>List, list => list.school)
    lists: List[];

}

export default School
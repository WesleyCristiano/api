import {
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    OneToOne,
    JoinColumn} from 'typeorm'
import Address from '@modules/addresses/infra/typeorm/entities/Address';

@Entity('stores')
class Store{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    address_id: string;

    @Column()
    company_name: string;

    @Column({
        nullable: true
    })
    logo: string;

    @Column()
    cnpj: string;

    @Column()
    email:string;

    @Column()
    phone_number: string

    @Column()
    password: string;

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

}

export default Store
import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    OneToOne
} from 'typeorm'
import Store from '@modules/stores/infra/typeorm/entities/Store';

@Entity('addresses')
class Address{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    zipcode: string;

    @Column()
    public_place: string;

    @Column()
    number: string;

    @Column({
        nullable: true
    })
    complement:string;

    @Column({
        nullable: true
    })
    reference_point: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
}

export default Address
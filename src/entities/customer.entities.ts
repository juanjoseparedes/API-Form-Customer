import { Entity, Column, PrimaryGeneratedColumn,  CreateDateColumn, UpdateDateColumn, BaseEntity  } from "typeorm";

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column({length: 100})
    firstname: string

    @Column({length: 100})
    lastname: string

    @Column({length: 100})
    email: string

    @Column()
    phone: number

    @Column({length: 100})
    company: string

    @Column({length: 100})
    jobtitle: string

    @Column({length: 100})
    contactabout: string

    @Column("text")
    coments: string

    @Column()
    currentcustomer: boolean

    @Column({"default": new Date()})
    createAt: Date;

    @Column({"default":new Date()})
    updateAd: Date;
}

import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Distributor extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @Column({length: 64, nullable: false})
    name!: string;

    @Column({length: 128, nullable: true})
    info?: string;
}
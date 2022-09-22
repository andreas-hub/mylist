import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Description extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @Column({type: 'text', nullable: false})
    description!: string;

    @Column({length: 255, nullable: true})
    shortDescription?: string;
}
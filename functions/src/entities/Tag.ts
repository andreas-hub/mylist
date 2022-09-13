import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinColumn} from "typeorm"
import {Comic} from "./Comic";

@Entity()
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @Column({length: 32, nullable: false})
    name!: string;

    @ManyToMany(() => Comic, t => t.tags)
    @JoinColumn()
    comics?: Comic[];
}
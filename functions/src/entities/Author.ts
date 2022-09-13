import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable} from "typeorm"
import {Comic} from "./Comic";

@Entity()
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @Column({length: 255, nullable: false})
    name!: string;

    @Column({length: 255, nullable: true})
    role?: string;

    @ManyToMany(() => Comic, c => c.authors)
    @JoinTable()
    comics?: Comic[];
}
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany} from "typeorm"
import {AuthorRole} from "../store/databaseEnums";
import {Entry} from "./Entry";

@Entity()
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @Column({length: 128, nullable: false})
    name!: string;

    @Column({type: 'tinyint', unsigned: true, nullable: true})
    author_role?: AuthorRole;

    @ManyToMany(() => Entry, (entry) => entry.authors)
    entries?: Entry[];
}
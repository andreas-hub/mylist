import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm"
import {Entry} from "./Entry";
import {Tag} from "../store/databaseEnums";

@Entity()
export class EntryTag extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @Column({type: 'tinyint', unsigned: true, nullable: false})
    tag!: Tag;

    @ManyToOne(() => Entry)
    entry!: Entry;
}
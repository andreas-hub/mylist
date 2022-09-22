import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {Title} from "./Title";
import {Description} from "./Description";
import {Distributor} from "./Distributor";
import {AgeRating} from "../store/databaseEnums";
import {Author} from "./Author";
import {EntryTag} from "./EntryTag";

@Entity()
export class Entry extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @OneToOne(() => Title)
    @JoinColumn()
    title!: Title;

    @OneToOne(() => Description)
    @JoinColumn()
    description?: Description;

    @OneToOne(() => Distributor)
    @JoinColumn()
    distributor?: Distributor;

    @Column({type: 'tinyint', unsigned: true, nullable: true})
    ageRating?: AgeRating;

    @Column({type: 'char', length: 7, nullable: true})
    cover?: string;

    @Column({type: 'date', nullable: true})
    dateReleased?: string;

    @Column({type: 'char', length: 2, nullable: true})
    language?: string;

    @Column({type: 'char', length: 2, nullable: true})
    country?: string;

    @ManyToMany(() => Author, (author) => author.entries)
    @JoinTable()
    authors?: Author[];

    @OneToMany(() => EntryTag, (entryTag) => entryTag.entry)
    tags?: EntryTag[];

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: string;

    @Column({type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: string;
}
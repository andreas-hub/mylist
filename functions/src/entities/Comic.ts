import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn} from "typeorm";
import {Entry} from "./Entry";
import {ComicStatus, ComicType} from "../store/databaseEnums";


@Entity()
export class Comic extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @OneToOne(() => Entry)
    @JoinColumn()
    entry!: Entry;

    @Column({type: 'tinyint', unsigned: true, nullable: false, default: ComicType.Unknown})
    comicType!: ComicType;

    @Column({type: 'tinyint', unsigned: true, nullable: false, default: ComicStatus.Unknown})
    comicStatus!: ComicStatus;

    @Column({type: 'int', unsigned: true, nullable: true})
    chapters?: number;

    @Column({type: 'date', nullable: true})
    dateFinished?: string;
}
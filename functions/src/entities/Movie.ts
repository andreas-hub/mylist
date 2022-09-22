import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn} from "typeorm"
import {Entry} from "./Entry";
import {MovieStatus, Videography} from "../store/databaseEnums";

@Entity()
export class Movie extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @OneToOne(() => Entry)
    @JoinColumn()
    entry!: Entry;

    @Column({type: 'tinyint', unsigned: true, nullable: false})
    movieStatus!: MovieStatus;

    @Column({type: 'tinyint', unsigned: true, nullable: false})
    videography!: Videography;

    @Column({type: 'decimal', precision: 15, scale: 2, nullable: true})
    box_office?: number;

    @Column({type: 'int', unsigned: true, nullable: true})
    duration?: number;
}
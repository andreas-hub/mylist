import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn} from "typeorm"
import {Entry} from "./Entry";
import {TVStatus, TvType, Videography} from "../store/databaseEnums";

@Entity()
export class TVSeries extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @OneToOne(() => Entry)
    @JoinColumn()
    entry!: Entry;

    @Column({type: 'tinyint', unsigned: true, nullable: false, default: TVStatus.Unknown})
    tvStatus!: TVStatus;

    @Column({type: 'tinyint', unsigned: true, nullable: false, default: TvType.TV})
    tvType!: TvType;

    @Column({type: 'tinyint', unsigned: true, nullable: false})
    videography!: Videography;

    @Column({type: 'decimal', precision: 15, scale: 2, nullable: true})
    box_office?: number;

    @Column({type: 'int', unsigned: true, nullable: true})
    episodes?: number;

    @Column({type: 'int', unsigned: true, nullable: true})
    seasons?: number;

    @Column({type: 'date', nullable: true})
    dateFinished?: string;

    @Column({type: 'int', unsigned: true, nullable: true})
    durationAverage?: number;
}
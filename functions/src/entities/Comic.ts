import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, JoinTable, ManyToMany} from "typeorm"
import {Type} from "./Type";
import {Status} from "./Status";
import {AgeRating} from "./AgeRating";
import {Serializer} from "./Serializer";
import {Title} from "./Title";
import {Author} from "./Author";
import {Tag} from "./Tag";


@Entity()
export class Comic extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @OneToOne(() => Title)
    @JoinColumn()
    title!: Title;

    @Column({type: 'text', nullable: true})
    description?: string;

    @Column({unsigned: true, nullable: true})
    chapters?: number;

    @Column({type: 'datetime', nullable: false})
    startDate!: string;

    @Column({type: 'datetime', nullable: true})
    endDate?: string;

    @Column({type: 'char', length: 2, nullable: true})
    country?: string;

    @Column({type: 'char', length: 2, nullable: true})
    language?: string;

    @OneToOne(() => Type)
    @JoinColumn()
    type?: Type;

    @OneToOne(() => Status)
    @JoinColumn()
    status?: Status;

    @OneToOne(() => AgeRating)
    @JoinColumn()
    ageRating?: AgeRating;

    @OneToOne(() => Serializer)
    @JoinColumn()
    serialization?: Serializer;

    @ManyToMany(() => Author, a => a.comics)
    @JoinTable()
    authors?: Author[];

    @ManyToMany(() => Tag, t => t.comics)
    @JoinColumn()
    tags?: Tag[];
}
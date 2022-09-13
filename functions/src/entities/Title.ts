import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class Title extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @Column({length: 255, nullable: false})
    main!: string;

    @Column({length: 255, nullable: true})
    alternative?: string;

    @Column({length: 255, nullable: true})
    originalLanguage?: string;

    @Column({length: 255, nullable: true})
    other?: string;
}
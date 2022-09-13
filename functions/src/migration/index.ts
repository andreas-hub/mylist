import * as dotenv from 'dotenv';

dotenv.config();
import Constants from '../store/Constants';
import {DataSource} from 'typeorm';
import {Movie} from '../entities/Movie';
import {Comic} from '../entities/Comic';
import {Author} from '../entities/Author';
import {AgeRating} from '../entities/AgeRating';
import {Serializer} from '../entities/Serializer';
import {Status} from '../entities/Status';
import {Tag} from '../entities/Tag';
import {Title} from '../entities/Title';
import {Type} from '../entities/Type';

const AppDataSource = new DataSource({
    ...Constants.DATABASE,
    synchronize: true,
    logging: true,
    logger: 'advanced-console',
    entities: [Movie, Comic, Author, AgeRating, Serializer, Status, Tag, Title, Type],
});

export default (async () => {
    await AppDataSource.initialize().catch((error) => console.log(error));

    /**
     * Seed tables with data
     */

    await AppDataSource.createQueryBuilder().delete().from(Tag).where('id > 0').execute();
    await AppDataSource.query('ALTER TABLE tag AUTO_INCREMENT = 1');
    await AppDataSource.createQueryBuilder().insert().into(Tag)
        .values([
            {name: 'Webtoon'},
            {name: 'Shonen'},
            {name: 'Shoujo'},
            {name: 'Seinen'},
            {name: 'Josei'},
            {name: 'Hentai'},
            {name: 'Ecchi'},
            {name: 'Issekai'},
            {name: 'RPG'},
            {name: 'Regression'},
            {name: 'Martial Arts'},
        ]).execute();

    await AppDataSource.createQueryBuilder().delete().from(Type).where('id > 0').execute();
    await AppDataSource.query('ALTER TABLE type AUTO_INCREMENT = 1');
    await AppDataSource.createQueryBuilder().insert().into(Type)
        .values([
            {name: 'Manga'},
            {name: 'Manhwa'},
            {name: 'Manhua'},
            {name: 'Doujinshi'},
            {name: 'Comic'},
            {name: 'Oneshot'},
            {name: 'Novel'},
            {name: 'Unknown'},
        ]).execute();

    await AppDataSource.createQueryBuilder().delete().from(Status).where('id > 0').execute();
    await AppDataSource.query('ALTER TABLE status AUTO_INCREMENT = 1');
    await AppDataSource.createQueryBuilder().insert().into(Status)
        .values([
            {name: 'finished'},
            {name: 'currently publishing'},
            {name: 'not yet published'},
            {name: 'hiatus'},
            {name: 'unknown'},
        ]).execute();

    await AppDataSource.createQueryBuilder().delete().from(AgeRating).where('id > 0').execute();
    await AppDataSource.query('ALTER TABLE age_rating AUTO_INCREMENT = 1');
    await AppDataSource.createQueryBuilder().insert().into(AgeRating)
        .values([
            {name: 'G'},
            {name: 'PG'},
            {name: 'R'},
            {name: 'R18'},
        ]).execute();

    process.exit(1);
})();

import * as dotenv from 'dotenv';

dotenv.config();
import Constants from '../store/Constants';
import {DataSource} from 'typeorm';
import {Movie} from '../entities/Movie';
import {Comic} from '../entities/Comic';
import {Author} from '../entities/Author';
import {EntryTag} from '../entities/EntryTag';
import {Title} from '../entities/Title';
import {Description} from '../entities/Description';
import {Distributor} from '../entities/Distributor';
import {Entry} from '../entities/Entry';
import {TVSeries} from '../entities/TVSeries';

const AppDataSource = new DataSource({
    ...Constants.DATABASE,
    synchronize: true,
    logging: true,
    logger: 'advanced-console',
    entities: [Author, Comic, Description, Distributor, Entry, EntryTag, Movie, Title, TVSeries],
});

export default (async () => {
    await AppDataSource.initialize().catch((error) => console.log(error));

    // /**
    //  * Seed tables with data
    //  */
    // await AppDataSource.createQueryBuilder().delete().from(AgeRating).where('id > 0').execute();
    // await AppDataSource.query('ALTER TABLE age_rating AUTO_INCREMENT = 1');
    // await AppDataSource.createQueryBuilder().insert().into(AgeRating)
    //     .values([
    //         {name: 'G'},
    //         {name: 'PG'},
    //         {name: 'R'},
    //         {name: 'R18'},
    //     ]).execute();

    process.exit(1);
})();

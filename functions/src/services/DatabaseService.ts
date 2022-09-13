import {DataSource} from 'typeorm';
import Constants from '../store/Constants';

export default new DataSource({
    ...Constants.DATABASE,
    synchronize: false,
    logging: true,
    logger: 'file',
    entities: [],
    subscribers: [],
    migrations: [],
});

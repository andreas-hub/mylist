import {DataSourceOptions} from 'typeorm';

/**
 * Constants
 */
class Constants {
    private _DATABASE: DataSourceOptions = {
        host: process.env['DB_HOST'] || '',
        port: parseInt(process.env['DB_PORT'] || ''),
        username: process.env['DB_USER'] || '',
        password: process.env['DB_PASS'] || '',
        database: process.env['DB_DATABASE'] || '',
        type: 'mysql',
    };

    private _API_KEYS: ApiKeys = {
        rapidApi: process.env['RAPID_API_KEY'] || '',
    };

    /**
     * Database Constants getter
     */
    get DATABASE() {
        return this._DATABASE;
    }

    /**
     * Api Keys Constants getter
     */
    get API_KEYS() {
        return this._API_KEYS;
    }
}

interface ApiKeys {
    rapidApi: string
}

export default new Constants();

import {DataSourceOptions} from 'typeorm';

/**
 * Constants
 */
class Constants {
    private _DATABASE: DataSourceOptions = {
        host: process.env.DB_HOST || '',
        port: parseInt(process.env.DB_PORT || ''),
        username: process.env.DB_USER || '',
        password: process.env.DB_PASS || '',
        database: process.env.DB_DATABASE || '',
        type: 'mysql',
    };

    private _API_KEYS: ApiKeys = {
        rapidApi: process.env.RAPID_API_KEY || '',
    };

    private _IMGUR: Imgur = {
        client_id: process.env.IMGUR_CLIENT_ID || '',
        client_secret: process.env.IMGUR_CLIENT_SECRET || '',
        access_token: process.env.IMGUR_ACCESS_TOKEN || '',
        refresh_token: process.env.IMGUR_REFRESH_TOKEN || '',
        account_username: process.env.IMGUR_ACCOUNT_USERNAME || '',
        account_id: process.env.IMGUR_ACCOUNT_ID || '',
        album_id: process.env.IMGUR_ALBUM_ID || '',
    };

    private _URL = {
        imgur: 'https://api.imgur.com/3',
    };

    private _HEADERS = {
        json: {'Content-Type': 'application/json'},
        imgurAuth: {'Authorization': `Bearer ${process.env.IMGUR_ACCESS_TOKEN}`},
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

    /**
     * Imgur constants getter
     */
    get IMGUR() {
        return this._IMGUR;
    }

    /**
     * URLs
     */
    get URL() {
        return this._URL;
    }

    /**
     * HTTP Headers
     */
    get HEADERS() {
        return this._HEADERS;
    }
}

interface ApiKeys {
    rapidApi: string
}

interface Imgur {
    client_id: string;
    client_secret: string;
    access_token: string;
    refresh_token: string;
    account_username: string;
    account_id: string;
    album_id: string;
}

export default new Constants();

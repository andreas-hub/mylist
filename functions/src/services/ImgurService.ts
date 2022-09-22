import axios from 'axios';
import Constants from '../store/Constants';
import {ImgurUploadImage} from '../store/typings';

/**
 * Imgur Service
 */
class ImgurService {
    /**
     * Upload an image from URL to IMGUR album "MyList"
     * @param {string} url
     * @param {string} name
     */
    async uploadImage(url: string, name = ''): Promise<string> {
        const data = JSON.stringify({
            image: url,
            album: Constants.IMGUR.album_id,
            type: 'url',
            name: name,
            title: name,
        });
        const headers = {
            ...Constants.HEADERS.json,
            ...Constants.HEADERS.imgurAuth,
        };
        const imgurUrl = `${Constants.URL.imgur}/image`;
        const response = await axios.post<ImgurUploadImage>(imgurUrl, data, {headers});
        return response.data.data.id;
    }
}

export default new ImgurService();

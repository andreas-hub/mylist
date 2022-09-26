import axios from 'axios';
import Constants from '../store/Constants';
import {TVMazeEpisode} from '../store/typings';

/**
 *
 */
class MovieDataService {
    /**
     * @param {string} id IMDB ID
     */
    async getMovieById(id: string): Promise<object> {
        const headers = {
            ...Constants.HEADERS.rapidApiHost,
            ...Constants.HEADERS.rapidApiKey,
        };
        const params = {r: 'json', i: id};
        const response = await axios.get(Constants.URL.API.mdb, {params, headers});

        if (response.data.Type === 'series') {
            response.data.episodes = await this.getShowEpisodes(id) || [];
        }
        return response.data;
    }

    /**
     * @param {string} id IMDB ID
     * @return {Promise<number>} TV Maze ID
     * @private
     */
    private async getTVMazeId(id: string): Promise<number> {
        const url = Constants.URL.API.tvMaze + '/lookup/shows';
        const response = await axios.get(url, {params: {imdb: id}});
        return (response.data.id);
    }

    /**
     * @param {string} id IMDB ID
     * @return {Promise<TVMazeEpisode[]>}
     */
    private async getShowEpisodes(id: string): Promise<TVMazeEpisode[]> {
        const showId = await this.getTVMazeId(id);
        const url = `${Constants.URL.API.tvMaze}/shows/${showId}/episodes`;
        const response = await axios.get<TVMazeEpisode[]>(url);
        return response.data;
    }
}

export default new MovieDataService();

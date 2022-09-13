// import axios from "axios";
// import constants from "../constants";
//
// class MovieData {
//     private readonly _mdbUrl: string = 'https://movie-database-alternative.p.rapidapi.com';
//     private readonly _tvMazeUrl: string = 'https://api.tvmaze.com';
//     private readonly _host: string = 'movie-database-alternative.p.rapidapi.com';
//     private readonly _key: string = constants.API_KEYS.rapidApi || '';
//
//     /**
//      * @param id IMDB ID
//      */
//     async getMovieById(id: string) {
//         const response = await axios.get(this._mdbUrl, {
//             headers: {
//                 'X-RapidAPI-Host': this._host,
//                 'X-RapidAPI-Key': this._key
//             },
//             params: {r: 'json', i: id}
//         });
//
//         if (response.data.Type === 'series') {
//             response.data.episodes = await this.getShowEpisodes(id);
//         }
//
//         return response.data;
//     }
//
//     /**
//      * @param id IMDB ID
//      * @return TV Maze ID
//      * @private
//      */
//     private async getShowId(id: string): Promise<number> {
//         const url = this._tvMazeUrl + '/lookup/shows';
//         const response = await axios.get(url, {params: {imdb: id}});
//         return (response.data.id);
//     }
//
//     /**
//      * @param id IMDB ID
//      */
//     private async getShowEpisodes(id: string) {
//         const showId = await this.getShowId(id);
//         const url = `${this._tvMazeUrl}/shows/${showId}/episodes`;
//         const response = await axios.get(url);
//         return response.data;
//     }
// }
//
// export default new MovieData();

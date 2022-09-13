/**
 * Movies Service
 */
class MovieService {
    /**
     * @param {number} id
     */
    async getById(id: number): Promise<object> {
        // return await Movie.findOneBy({id});
        return {value: 'Hello Movie Service ' + id};
    }
}

export default new MovieService();

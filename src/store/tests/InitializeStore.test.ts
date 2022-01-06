import { InitializeStore } from "../InitializeStore";
import * as API from "../../api/movieApi";

describe('InitializeStore', () => {
    it('correctly returns list of movies and currentMovie', async () => {
        jest.spyOn(API, 'getAllMovies').mockResolvedValueOnce([
            {
                    id: '123-908',
                    title: 'Space Odyssey', 
                    summary: 'Some summary',
                    rating: 9.72,
                    imageUrl: 'https://picsum.photos/id/2/1000/800'
             
            }
        ]);

        const result = await InitializeStore();
        
        expect(result.movies).toHaveLength(1);
        expect(result.currentMovie).not.toBeNull();
    });

    it('correctly handles empty list of movies', async () => {
        jest.spyOn(API, 'getAllMovies').mockResolvedValueOnce([]);

        const result = await InitializeStore();
        
        expect(result.movies).toHaveLength(0);
        expect(result.currentMovie).toBeNull();
    })
});
import { MovieReducer } from "../Movie";
import {ActionTypes} from '../ActionTypes';
import * as API from "../../api/movieApi";

const mockMovies = [
    {
        id: '123-908',
        title: 'Space Odyssey', 
        summary: 'Some summary',
        rating: 9.72,
        imageUrl: 'https://picsum.photos/id/2/1000/800'
 
    },
    {
        id: 'ad-12-ad',
        title: 'Matrix', 
        summary: 'Some summary',
        rating: 10,
        imageUrl: 'https://picsum.photos/id/2/1000/800'
    }
]

describe('MovieReducer', () => {
    describe('actions', () => {
        it('INIT', () => {
            const baseState = {movies: [], currentMovie: null};
            const action = {
                type: ActionTypes.INIT,
                data: {
                    movies: mockMovies,
                    currentMovie: mockMovies[0]
                }
            };
            expect(MovieReducer(baseState, action)).toEqual({
                ...action.data
            })
        });

        it('ACCEPT_MOVIE', () => {
            jest.spyOn(API, 'reviewMovie')
            const baseState = {movies: mockMovies, currentMovie: mockMovies[0]};
            const action = {type: ActionTypes.ACCEPT_MOVIE};
            const [, ...expectedMovies] = mockMovies; 
            expect(MovieReducer(baseState, action)).toEqual({
                movies: expectedMovies,
                currentMovie: expectedMovies[0]
            });

            expect(API.reviewMovie).toHaveBeenCalled();
            expect(API.reviewMovie).toHaveBeenCalledWith(mockMovies[0].id, true);
        });

        it('REJECT_MOVIE', () => {
            jest.spyOn(API, 'reviewMovie')
            const baseState = {movies: mockMovies, currentMovie: mockMovies[0]};
            const action = {type: ActionTypes.REJECT_MOVIE};
            const [, ...expectedMovies] = mockMovies; 
            expect(MovieReducer(baseState, action)).toEqual({
                movies: expectedMovies,
                currentMovie: expectedMovies[0]
            });

            expect(API.reviewMovie).toHaveBeenCalled();
            expect(API.reviewMovie).toHaveBeenCalledWith(mockMovies[0].id);
     
        });

        it('unknown action', () => {
            const baseState = {movies: mockMovies, currentMovie: mockMovies[0]};
            // @ts-ignore
            expect(MovieReducer(baseState, {type: 'someUnknownAction'})).toEqual(baseState);
        });
    });
});
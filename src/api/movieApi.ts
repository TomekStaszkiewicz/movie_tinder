import axios from "axios";
import { Movie } from "../types/Movie"
import movies from './movies.json';

/**
 * A mock function for simulating the API call to /recommendations
 */
export const getAllMovies = (): Promise<Movie[]> => {
    return new Promise((res) => {
        setTimeout(() => res(movies))
    })
}

/**
 * A mock function for simulating the API call to /recommendations.
 * It will throw errors now, since always 404
 */
export const reviewMovie = async (movieId?: string, isAccepted = false): Promise<void> => {
    if(!movieId) return;
    try {
        const actionType = isAccepted ? 'accept' : 'reject';
        await axios.put(`/recommendations/${movieId}/${actionType}`);
    } catch(e){
        console.error(`Error when calling reviewMovie`, e)
    }
}
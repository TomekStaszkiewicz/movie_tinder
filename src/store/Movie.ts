import { reviewMovie } from "../api/movieApi";
import { ActionTypes } from "./ActionTypes";
import { Payload, Reducer, StoreData } from "./types"

export const initialData: StoreData = { movies: [], currentMovie: null}

function getNewListAndCurrentMovie(state: StoreData) {
    const newMoviesList = state.movies.filter((m) => m.id !== state.currentMovie?.id);
    const newCurrentMovie = newMoviesList[0] || null;
    return {
        movies: newMoviesList,
        currentMovie: newCurrentMovie
    }
}

export const MovieReducer: Reducer<StoreData> = (state: StoreData, action: Payload) => {
    switch (action.type) {
        case ActionTypes.INIT:
            return {
                ...state,
                ...action.data
            }
        case ActionTypes.ACCEPT_MOVIE: {
            reviewMovie(state.currentMovie?.id, true);
            const { movies, currentMovie} = getNewListAndCurrentMovie(state);
            return { 
                ...state,
                movies,
                currentMovie
            }}
        case ActionTypes.REJECT_MOVIE: {
            reviewMovie(state.currentMovie?.id);
            const { movies, currentMovie} = getNewListAndCurrentMovie(state);
            return { 
                ...state,
                movies,
                currentMovie
            }}
        default: 
            return state;
    }
}
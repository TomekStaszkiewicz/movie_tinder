import { Movie } from "../types/Movie";
import { ActionTypes } from "./ActionTypes";

export type StoreData = {
    movies: Movie[];
    currentMovie: Nullable<Movie>;
} 

export type Payload = {
    type: ActionTypes;
    data?: Partial<StoreData>;
}

export type Reducer<T = {}> = (state: T, action: Payload) => T;
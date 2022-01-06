import { getAllMovies } from "../api/movieApi";
import { StoreData } from "./types";

export const InitializeStore: () => Promise<StoreData> = async () => {
    const movies = await getAllMovies();
    const currentMovie = movies[0] || null;
    return {
      movies,
      currentMovie 
    }
  }
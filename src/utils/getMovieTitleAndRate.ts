import { Movie } from "../types/Movie";

export default function getMovieTitleAndRate(m: Movie){
    return `${m.title}(${m.rating}/10)`;
}
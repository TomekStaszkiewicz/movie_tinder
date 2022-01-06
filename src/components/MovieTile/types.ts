import { Movie } from "../../types/Movie";

export type MovieTileProps = {
    movie: Movie;
    onAccept: VoidFunction;
    onReject: VoidFunction;
}
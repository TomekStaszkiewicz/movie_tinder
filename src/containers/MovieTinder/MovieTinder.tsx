import { useCallback } from 'react'

import MovieTile from '../../components/MovieTile';
import NoMoreMovies from '../../components/NoMoreMovies';
import { useStore } from '../../hooks';
import { ActionTypes } from '../../store';

const MovieTinder: Component = () => {
    const [state, dispatch] = useStore();

    const acceptCurrent = useCallback(() => {
         dispatch({type: ActionTypes.ACCEPT_MOVIE})
     }, [dispatch]);
 
     const rejectCurrent = useCallback(() => {
        dispatch({type: ActionTypes.REJECT_MOVIE})
    }, [dispatch]);

    const {currentMovie} = state;

    if(!currentMovie) return <NoMoreMovies />
   
    return (
        <MovieTile 
            movie={currentMovie} 
            onAccept={acceptCurrent}
            onReject={rejectCurrent}
        />
    )
}

export default MovieTinder

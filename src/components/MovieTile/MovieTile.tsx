import { useMemo } from 'react';
import {FaCheck, FaTimes} from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

import { getMovieTitleAndRate } from '../../utils';
import { AcceptButton, MovieContainer, MovieImage, RejectButton, Summary, Title } from './styles';
import { MovieTileProps } from './types';

const MovieTile: Component<MovieTileProps> = ({ 
    movie, 
    onAccept, 
    onReject
}) => {
   
    const handlers = useSwipeable({
        onSwiped: onReject,
    })

    const fullTitle = useMemo(() => getMovieTitleAndRate(movie), [movie])
    
    return (
        <MovieContainer>
            <Title>{fullTitle}</Title>
            <MovieImage 
                src={movie.imageUrl} 
                alt={movie.title} 
                {...handlers}
            />
            <Summary>{movie.summary}</Summary>
            <AcceptButton onClick={onAccept}>Accept  <FaCheck /></AcceptButton>
            <RejectButton onClick={onReject}>Reject  <FaTimes /></RejectButton>
        </MovieContainer>
    )
}

export default MovieTile;

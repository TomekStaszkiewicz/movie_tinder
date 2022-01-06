import { render, screen } from '@testing-library/react';
import MovieTile from '../MovieTile';


describe('MovieTile', () => {
    it('renders correctly', () => {
        const mockMovie = {
                id: '123-mmm',
                title: 'Matrix', 
                summary: 'Some summary',
                rating: 7.03,
                imageUrl: 'https://picsum.photos/id/3/1000/800'
        }
        render(<MovieTile movie={mockMovie} onAccept={jest.fn()} onReject={jest.fn()} />)
    
        expect(screen.getByText('Matrix(7.03/10)')).toBeDefined();
    });
});
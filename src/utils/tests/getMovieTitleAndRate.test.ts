import getMovieTitleAndRate from '../getMovieTitleAndRate';

const baseMovie = {
    id: '123-mmm',
    title: 'Matrix', 
    summary: 'Some summary',
    rating: 7.03,
    imageUrl: 'https://picsum.photos/id/3/1000/800'

}

describe('getMovieTitleAndRate', () => {
    it.each([
        ['SomeTitle', 10, 'SomeTitle(10/10)'],
        ['Another title', 0, 'Another title(0/10)'],
        ['Title with many words', 7.21, 'Title with many words(7.21/10)'],
        ['Last one?', 2, 'Last one?(2/10)']
    ])('correctly concatenates %p with %p and returns %p', (title, rating, expectedResult) => {
        expect(getMovieTitleAndRate({...baseMovie, title, rating})).toEqual(expectedResult);
    });
});
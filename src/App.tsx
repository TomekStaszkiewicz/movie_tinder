import { StoreProvider } from './store';
import styled from 'styled-components';
import MovieTinder from './containers/MovieTinder';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppWrapper>
      <StoreProvider>
        <MovieTinder />
      </StoreProvider>
    </AppWrapper>
  );
}

export default App;

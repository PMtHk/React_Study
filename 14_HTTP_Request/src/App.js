import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩중인지 확인하기 위한 상태변수

  async function fetchMoviesHandler() {
    setIsLoading(true);
    // Fetch API 사용. Promise 라는 객체를 반환한다.
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();

    // http 요청으로 받은 결과와 우리가 사용하려는 형태를 맞춰야 한다.
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });

    setMovies(transformedMovies);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No Movies Found...</p>}
        {isLoading && <p> Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

import React from 'react';

import { instance } from './axios';

//Styles
import './Row.css';

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// Materialize

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original';
// const page = '&page=2';

function Row({ title, fetch, poster, large }) {
  const [movies, setMovies] = React.useState(Array);
  const [trailerUrl, setTrailerUrl] = React.useState('');

  function playTrailer(movie) {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          console.log(url.substring(32));
          setTrailerUrl(String(url.substring(32)));
        })
        .catch((error) => console.log(error));
    }
  }

  React.useEffect(() => {
    instance.get(fetch).then((res) => {
      setMovies([...movies, ...res.data.results]);
    });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1, volume: 0.5 },
  };

  return (
    <div className='row__container'>
      {/* title */}
      {/* container -> posters */}
      <h2 className='category__title'>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className={`row__poster ${large && 'row__posterLarge'}`}
              onClick={() => {
                playTrailer(movie);
              }}
            >
              <img
                className={`row__posterImage ${
                  large && 'row__posterImageLarge'
                }`}
                src={
                  BACKDROP_PATH +
                  (poster ? movie.poster_path : movie.backdrop_path)
                }
                alt={movie?.title || movie?.name || movie?.original_name}
              ></img>
            </div>
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

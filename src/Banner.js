import React from 'react';

import { instance, API_URL } from './axios';
import requests from './requests';

import './Banner.css';

// MD react
import { Button } from '@material-ui/core';

function Banner() {
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  // }

  // Function to truncate movie description on word
  function truncate(str, n) {
    let i;
    const splitted = str?.split(' ');
    let result = [];
    let current_length = 0;
    for (i = 0; i < splitted?.length; i++) {
      current_length += splitted[i].length;
      if (current_length < n) {
        result.push(splitted[i]);
      } else {
        result.push(['...']);
        break;
      }
    }
    return result.join(' ');
  }

  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    instance.get(API_URL + requests.fetchNetflixOriginals).then((response) => {
      const random = Math.floor(
        Math.random() * (response.data.results.length - 1)
      );
      setMovie(response.data.results[random]);
    });
  }, []);

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      <div className='banner__contents'>
        {/* <<< Background Image */}
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className='banner__buttons'>
          <Button className='banner__button'>Play</Button>
          <Button className='banner__button'>My List</Button>
        </div>
        <h2 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  );
}

export default Banner;

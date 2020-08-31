import React from 'react';
import './App.css';

import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

import requests from './requests';

export default function App() {
  return (
    <div>
      {/* Nav */}
      <Nav></Nav>
      {/* Banner */}
      <Banner></Banner>
      {/* Rows for each category */}
      <div className='app__rows'>
        <Row
          title='Netflix Originals'
          fetch={requests.fetchNetflixOriginals}
          poster
          large
        ></Row>
        <Row title='Trending Now' fetch={requests.fetchTrending}></Row>
        <Row title='Top Now' fetch={requests.fetchTopRated}></Row>
        <Row title='Action Movies' fetch={requests.fetchActionMovies}></Row>
        <Row title='Comedy Movies' fetch={requests.fetchComedyMovies}></Row>
        <Row title='Horror Movies' fetch={requests.fetchHorrorMovies}></Row>
        <Row title='Romance Movies' fetch={requests.fetchRomanceMovies}></Row>
        {/* <Row title='Documentaries' fetch={requests.fetchDocumentaries}></Row> */}
        <Row title='Crime Movies' fetch={requests.fetchCrimeMovies}></Row>
        <Row title='Drama Movies' fetch={requests.fetchDramaMovies}></Row>
      </div>
    </div>
  );
}

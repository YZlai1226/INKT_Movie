import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from 'next/link'
import MovieManager from '../components/homecomps/MovieManager'
// import PopularityManager from '../components/homecomps/PopularityManager'
import { useState, useEffect } from "react";
import Filters from '../components/homecomps/Filters'
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { CoPresent } from '@mui/icons-material';
import { FormControlUnstyledContext } from '@mui/base';
<<<<<<< HEAD
import Autocomplete from '@mui/material/Autocomplete';
=======
import { useAuth } from 'hooks/auth';
>>>>>>> b9881a19f110fa5d26f64c81af227230ba8281c8

export const getStaticProps = async () => {
  const responseMovies = 
  // await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US')
  await fetch('http://127.0.0.1:8000/api/movies')
  const data = await responseMovies.json()

  const responseGenres =
  await fetch('http://127.0.0.1:8000/api/genres')
  const GenresData = await responseGenres.json()

  return {
    props: { movies: data, genres: GenresData.genres }
  }
}


const Homepage = ({ movies, genres }) => {

  const [voteCount, setVoteCount] = React.useState();
  const [movieScore, setMovieScore] = React.useState();
  const [movieTitle, setMovieTitle] = React.useState();
  const [movieGenre, setMovieGenre] = React.useState();
  const [filteredMovies, setFilteredMovies] = React.useState(movies);


  useEffect(() => {
    filteredMovies = filter_movies(movies)
    setFilteredMovies(filteredMovies);
  }, [voteCount]);
  useEffect(() => {
    filteredMovies = filter_movies(movies)
    setFilteredMovies(filteredMovies);
  }, [movieScore]);
  useEffect(() => {
    filteredMovies = filter_movies(movies)
    setFilteredMovies(filteredMovies);
  }, [movieTitle]);
  useEffect(() => {
    filteredMovies = filter_movies(movies)
    setFilteredMovies(filteredMovies);
  }, [movieGenre]);


  function filter_movies(movies) {
    const filters = {
      vote_average: movieScore,
      vote_count: voteCount,
      title: movieTitle,
      genre_ids: movieGenre
    }
    var result = movies.filter(obj => {
      console.log(`vote_average: ${movieScore}`)
      console.log(`vote_count: ${voteCount}`)
      console.log(`title: ${movieTitle}`)
      console.log(`genre_ids: ${movieGenre}`)
      for (var filter in filters) {
        console.log(`Comparing ${obj[filter]} with ${filters[filter]}`)
        if (filters[filter] === undefined)
          continue;
        if (filter === 'title') {
          if (!obj[filter].toLowerCase().includes(filters[filter].toLowerCase())) {
            return false;
          }
        }
        else if (filter === 'genre_ids') {
          console.log(`obj[filter]: ${obj[filter]} and ${typeof(obj[filter])}`)
          if (!obj[filter].includes(filters[filter])) {
            return false;
          }
        }
        else if (obj[filter] < filters[filter]) {
          return false;
        }
      }
      return true;
    });
    // console.log(result);
    return result;
  }

  const handleChangeVoteCount = event => {
    console.log('INSIDE handleChangeVoteCount()');
    if (event) {
      setVoteCount(event.target.value);
      }
  };

  const handleChangeScore = event => {  
    console.log('INSIDE handleChangeScore()');
    if (event) {
      setMovieScore(event.target.value);
      console.log(event.target.value)
    }
  }

  const handleChangeMovieTitle = event => {
    console.log('INSIDE handleChangeTitle()');
    if (event) {
      setMovieTitle(event.target.value);
      console.log(event.target.value)
    }
  }

  // const handleChangeMovieGenre = (event) => {
  //   console.log('INSIDE handleChangeMovieGenre()');
  //   if (event) {
  //   setMovieGenre(event.target.value);
  //   console.log('=====================', event.target.value)
  // }
  // }

  const handleChangeMovieGenre = event => {
    console.log('INSIDE handleChangeMovieGenre()');
    if (event.target.innerHTML) {
      const selectedGenre = event.target.innerHTML
      const genreId = parseInt(genres.filter(element => element['name'] === selectedGenre)[0]['id'])
      setMovieGenre(genreId);
    }
  }


  return (
    <div>
      <Filters
      movies={movies}
      genres={genres}
      voteCount={voteCount}
      movieScore={movieScore}
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      handleChangeVoteCount={handleChangeVoteCount}
      handleChangeScore={handleChangeScore}
      handleChangeMovieTitle={handleChangeMovieTitle}
      handleChangeMovieGenre={handleChangeMovieGenre}
      >
      </Filters>
      <Container maxWidth="md" sx={{ my: 5 }} >
          <MovieManager movies={filteredMovies} key={movies.id}></MovieManager>
          {/* <PopularityManager></PopularityManager> */}
      </Container>
    </div>
  );
};

export default Homepage;




import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from 'next/link'
import MovieManager from '../components/homecomps/MovieManager'
// import PopularityManager from '../components/homecomps/PopularityManager'
import { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { CoPresent } from '@mui/icons-material';
import { FormControlUnstyledContext } from '@mui/base';

export const getStaticProps = async () => {
  const response = 
  await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US')
  const data = await response.json()

  return {
    props: { movies: data.results }
  }
}




const Homepage = ({ movies }) => {
  // movies = edit_movies_please_delete_me(movies)

  const [voteCount, setVoteCount] = React.useState();
  const [movieScore, setMovieScore] = React.useState();
  const [movieTitle, setMovieTitle] = React.useState();
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

  // movies = filter_movies(movies, '2010');

  // function edit_movies_please_delete_me(movies){
  //   console.log('1***********************')
  //   for (var movie in movies) {
  //     console.log(typeof(movies[movie]))
  //     console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZzz")
  //     console.log(parseInt(movies[movie]['release_date'].split('-')[0], 10))
  //     movies[movie]['release_dates'] = parseInt(movies[movie]['release_date'].split('-')[0], 10)
  //     console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZzz")
  //     // movies[movie]['release_date'] = parseInt(movies[movie]['release_date'][0])
  //     console.log(movies[movie])
  //   }
  //   console.log('2***********************')
  //   return (movies)
  // }

  function filter_movies(movies) {
    console.log(`********* voteCount: ${voteCount}`)
    console.log(`********* movieScore: ${movieScore}`)
    console.log(`********* movieTitle: ${movieTitle}`)
    const filters = {
      vote_average: movieScore,
      vote_count: voteCount,
      title: movieTitle
    }
    // voteCount = parseInt(voteCount, 10);
    // console.log("voteCount is !!!!!!!!!: ")
    // console.log(voteCount);
    // console.log("THE MOVIES ARE RIGHT HERE BROOO:");
    // console.log(movies);
    var result = movies.filter(obj => {
      for (var filter in filters) {
        console.log(`Treating filter ${filter} with value: ${filters[filter]}`)
        console.log(`We have: ${obj[filter]} and ${filters[filter]}`);
        if (filters[filter] === undefined)
          continue;
        if (filter === 'title') {
          if (!obj[filter].toLowerCase().includes(filters[filter].toLowerCase())) {
            // console.log("1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ret false")
            return false;
          }
        }
        else
          if (obj[filter] < filters[filter]) {
            // console.log(`obj[filter]: ${obj[filter]}`)
            // console.log(`filters[filter]: ${filters[filter]}`)
            // console.log("2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ret false")
            return false;
          }
          // console.log(typeof(obj[filter]))
          // console.log(typeof(filters[filter]))
          // console.log("ret false....")
          // return false;
      }
      // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! RETURN TRUE")
      return true;
        // if (filters[filter] === undefined)
        //   console.log(`Value of filter ${filter} is undefined. Skipping..`)
        // if (filter === 'voteCount')
        //   return parseInt(obj.release_date.split('-')[0], 10) >= filters[filter]
        // if (filter === 'movieScore')
        //   return obj.vote_average >= filters[filter]
        // }

        // if (isNan(voteCount))
      //   return parseInt(obj.release_date.split('-')[0], 10) >= voteCount
      // return obj.release_date.startsWith(voteCount)
    });
    // console.log(`Showing movies where release_date > ${voteCount}-xx-xx`);
    console.log(result);
    return result;
    // return movies;
  }

  const handleChangeVoteCount = event => {
    console.log('INSIDE handleChangeVoteCount()');
    setVoteCount(event.target.value);
  };

  const handleChangeScore = event => {
    console.log('INSIDE handleChangeScore()');
    setMovieScore(event.target.value);
    console.log(event.target.value)
  }

  const handleChangeMovieTitle = event => {
    console.log('INSIDE handleChangeTitle()');
    setMovieTitle(event.target.value);
    console.log(event.target.value)
  }

  return (
    <div>
      <InputLabel id="demo-simple-select-label">Number of Votes (just to test) (more than)</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={voteCount}
        onChange={handleChangeVoteCount}
      >
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={1}>1</MenuItem>
      </Select>
      <InputLabel id="demo-simple-select-label">Score (more than)</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={movieScore}
        onChange={handleChangeScore}
      >
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={1}>1</MenuItem>
      </Select>
      <br/>
      <TextField
        id="outlined-name"
        label="Movie Title"
        onChange={handleChangeMovieTitle}
      />
      <Container maxWidth="md" sx={{ my: 5 }} >
          <MovieManager movies={filteredMovies} key={movies.id}></MovieManager>
          {/* <PopularityManager></PopularityManager> */}
      </Container>
    </div>
  );
};

export default Homepage;




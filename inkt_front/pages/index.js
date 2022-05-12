import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
// import Header from '../components/Header'
import MovieManager from '../components/homecomps/MovieManager'
import PopularityManager from '../components/homecomps/PopularityManager'
import { useState, useEffect } from "react";


export const getStaticProps = async () => {
  const response = 
  await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=15c37324adb27b6151b6ca8fb77deebf&language=en-US')
  const data = await response.json()

  return {
    props: { movies: data.results }
  }
}



const Homepage = ({ movies }) => {
  
  return (
    <Container maxWidth="md"  sx={{ my: 5 }} >
        <MovieManager movies={movies} key={movies.id}></MovieManager>
        <PopularityManager></PopularityManager>
    </Container>
  );
};

export default Homepage;




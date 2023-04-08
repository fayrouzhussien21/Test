import { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Movies from "./Movies";
import React, { useState, useEffect } from 'react';

// function Movieitems() {
//     const [movies,setMovies]=useState([]);

//   useEffect(() => {
//     fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd')
//       .then(response => response.json())
//       .then(movie => setMovies(movie.results));
//   }, []);
//   console.log(movies)
//   return (
    
//         <div className="container">
//                     <div className="row justify-content-center">
                  
//           { movies.map((movie)=><Movies key={movie.id}  id={movie.id} backdrop_path={movie.backdrop_path} title={movie.title} description={movie.overview} ></Movies>
//         )}
//               </div>
//           </div>
//         )
  
// }


function Movieitems() {
    const [movies,setMovies]=useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(movie => setMovies(movie));
  }, []);
  console.log(movies)
  return (
    
        <div className="container">
                    <div className="row justify-content-center">
                  
          { movies.map((movie)=><Movies key={movie.id}  id={movie.id} poster_path={movie.poster_path} title={movie.title} description={movie.overview} ></Movies>
        )}
              </div>
          </div>
        )
  
}
export default Movieitems;
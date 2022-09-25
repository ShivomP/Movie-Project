import React from 'react'
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  return (
    <Link to={`movie/${movie.id}`} className="movie__card--link">
        <div className="movie__card">
            <img 
                src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" 
                alt="Movie Poster Image" 
                className="movie__img"
            />
            <h2 className="movie__title">
                {movie.title}
            </h2>
            
        </div>
    </Link>
  )
}

export default MovieCard

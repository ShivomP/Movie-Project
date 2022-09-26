import React from 'react'
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  return (
    <Link to={`movie/${movie.id}`} className="movie__card--link">
        <div className="movie__card">
            <img 
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt="Movie Poster Image" 
                className="movie__img"
            />
            <h2 className="movie__title">
                {movie.title}
            </h2>
            <p className="movie__info">
                {movie.release_date || movie.first_air_date} {"       "}
                Rating: {movie.vote_average === 10.0 ? movie.vote_average : movie.vote_average.toFixed(1)}
            </p>
        </div>
    </Link>
  )
}

export default MovieCard

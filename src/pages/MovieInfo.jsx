import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SkeletonInfo from '../components/SkeletonInfo'
import { useParams } from 'react-router-dom'
const API_KEY = '13a400176797127bc7c83a5655852e2a'

const MovieInfo = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState([true])

  useEffect(() => {
    async function getMovie() {
      try{
        const response = await axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(res => {
          setMovie(res.data)
          setLoading(false)
        })
      }catch (e){
        console.log(e)
      }
    }
    getMovie()
  }, [])

  return (
    <section id='movie__info'>
      <div className="container">
        <div className="row">
          <div className="movie__info--wrapper">
            {
              loading ? (
                <SkeletonInfo/>
              ) : (
                <>
                  <div className="movie__info--img-wrapper">
                    <img 
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="Move Poster Image" 
                      className="movie__info--img" 
                    />
                  </div>
                  <div className="movie__info--specifics">
                    <h1 className="movie__info--title">
                      {movie.title}
                    </h1>
                    <p className="movie__info--release">
                      <b>Release Date:</b>
                      {movie.release_date}
                    </p>
                    <p className="movie__info--duration">
                      <b>Time:</b>
                      {parseInt((movie.runtime / 60))}h{" "+(movie.runtime % 60)} min
                    </p>
                    <div className="movie__info--rating-wrapper">
                      <p className="movie__info--rating">
                        <b>Rating:</b>
                        {movie.vote_average.toFixed(1)}
                      </p>
                    </div>
                    <p className="movie__info--summary">
                      <b>Summary:</b>
                      {movie.overview}
                    </p>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieInfo

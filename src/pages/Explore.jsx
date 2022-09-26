import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'
import SkeletonCard from '../components/SkeletonCard'
const API_KEY = '13a400176797127bc7c83a5655852e2a'

const Explore = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [futureMovies, setFutureMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getMovies() {
      try{
        const response_TopRatedMovies = await axios
          .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
          .then(res => {
            setTopRatedMovies(res.data.results.slice(0,6))
          })
        const response_PopularMovies = await axios
          .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
          .then(res => {
            setPopularMovies(res.data.results.slice(0,6))
          })
        const response_FutureMovies = await axios
          .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
          .then(res => {
            setFutureMovies(res.data.results.slice(0,6))
          })
          setLoading(false)
      }catch (e){
        console.log(e)
      }
    }
    getMovies()
  }, [])

  return (
    <main>
      <section id="top-rated-movies">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Top Rated Movies
            </h2>
            <div className="movies--wrapper">
              {
                loading ? (
                    <SkeletonCard />
                ) : (
                    topRatedMovies.map((movie,index) => <MovieCard key={index} movie={movie} />)
                )
              }
            </div>
          </div>
        </div>
      </section>
      <section id="popular-movies">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Popular Movies
            </h2>
            <div className="movies--wrapper">
              {
                loading ? (
                    <SkeletonCard />
                ) : (
                    popularMovies.map((movie,index) => <MovieCard key={index} movie={movie} />)
                )
              }
            </div>
          </div>
        </div>
      </section>
      <section id="future-movies">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Future Movies
            </h2>
            <div className="movies--wrapper">
              {
                loading ? (
                    <SkeletonCard />
                ) : (
                    futureMovies.map((movie,index) => <MovieCard key={index} movie={movie} />)
                )
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Explore

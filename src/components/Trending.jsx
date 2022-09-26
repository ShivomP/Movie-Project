import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SkeletonCard from './SkeletonCard'
import MovieCard from './MovieCard'
const API_KEY = '13a400176797127bc7c83a5655852e2a'

function Trending() {
    const [trendingMovies, setTrendingMovies] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getTrendingMovies() {
            try{
                const response = await axios
                .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`)
                .then(res => {
                    setTrendingMovies(res.data.results.slice(0, 9))
                })
                setLoading(false)
            } catch(e){
                console.log(e)
            }
        }
        getTrendingMovies()
    }, [])

  return (
    <section id='trending-movies'>
        <div className="container">
            <div className="row">
                <h2 className="section__title">Trending Movies</h2>
                <div className="movies--wrapper">
                    {
                        loading ? (
                            <SkeletonCard/>
                        ) : (
                        trendingMovies.map((movie, index) => <MovieCard key={index} movie={movie}/>)
                        )
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trending



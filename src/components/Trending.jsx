import React from 'react'
import axios from 'axios'
import SkeletonCard from './SkeletonCard'
import MovieCard from './MovieCard'
const API_KEY = '13a400176797127bc7c83a5655852e2a'

function Trending() {
  return (
    <section id='trending-movies'>
        <div className="container">
            <div className="row">
                <h2 className="section__title">Trending Movies</h2>
                <div className="movies--wrapper">
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trending



import React from 'react'

function SkeletonCard() {
  return (
    <>
        <div className="movie-card--skeleton">
                <div className="movie__img--skeleton" />
                <div className="movie__title--skeleton"></div>
            </div>
            <div className="movie-card--skeleton">
                <div className="movie__img--skeleton" />
                <div className="movie__title--skeleton"></div>
            </div>
            <div className="movie-card--skeleton">
                <div className="movie__img--skeleton" />
                <div className="movie__title--skeleton"></div>
        </div>
    </>
  )
}

export default SkeletonCard

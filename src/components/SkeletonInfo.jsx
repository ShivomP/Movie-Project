import React from 'react'

function SkeletonInfo() {
  return (
    <>
        <div className='skeleton__movie--info-img-wrapper'>
        </div>
        <div className='skeleton__movie--info-specifics'>
            <h1 className='skeleton__movie--info-title'>
            </h1>
            <span className='skeleton__movie--info-release'>
            </span>
            <span className='skeleton__movie--info-duration'>
            </span>
            <div className='skeleton__movie--info-rating-wrapper'>
            </div>
            <p className='skeleton__movie--info-summary'>
            </p>
        </div>
    </>
  )
}

export default SkeletonInfo

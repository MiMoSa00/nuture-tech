import React from 'react'

 export const CarouselItem = ({ item }) => {
  return (
    <div className='carousel-item'>
      <div></div>
      <div className='carousel-item-text'>{item.description}</div>
    </div>
  )
}

export default CarouselItem
